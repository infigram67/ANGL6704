/* ============================================================
   EngLevel — учебник + тренажёр английского языка (B1-B2)
   ============================================================ */

function ex(pairs){ return pairs; }

/* ---------- 🔊 Озвучка через Web Speech API (бесплатно, без ключа) ---------- */
function speak(text){
  if(!('speechSynthesis' in window)){ return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.92;
  window.speechSynthesis.speak(u);
}
function speakerBtn(text, size){
  const b = document.createElement('button');
  b.className = 'speak-btn' + (size==='sm' ? ' sm' : '');
  b.title = 'Прослушать произношение';
  b.innerHTML = '🔊';
  b.addEventListener('click', (e)=>{ e.stopPropagation(); speak(text); });
  return b;
}

/* ==================== ГРАММАТИКА (ТЕОРИЯ) ==================== */
const GRAMMAR = [
{
  id:'parts-of-speech',
  title:'Части речи (Parts of Speech)',
  level:'B1',
  text:`В английском языке, как и в русском, есть основные части речи: существительное (noun), глагол (verb), прилагательное (adjective), наречие (adverb), местоимение (pronoun), предлог (preposition), союз (conjunction) и артикль (article). Понимание частей речи помогает правильно строить предложения и понимать порядок слов.`,
  formula:'Подлежащее (Subject) + Сказуемое (Verb) + Дополнение (Object)',
  examples:[
    ex([['She','она'],['quickly','быстро'],['reads','читает'],['an','—'],['interesting','интересную'],['book','книгу'],['.','']]),
    ex([['My','мой'],['brother','брат'],['works','работает'],['in','в'],['a','—'],['big','большой'],['company','компании'],['.','']])
  ]
},
{
  id:'articles',
  title:'Артикли a / an / the',
  level:'B1',
  text:`Артикль "a/an" ставится перед исчисляемыми существительными в единственном числе, когда предмет упоминается впервые или неважно, какой именно. "The" используется, когда предмет уже известен собеседнику или единственный в своём роде. Перед гласным звуком используется "an".`,
  formula:'a/an + существительное (в первый раз) · the + существительное (уже известно)',
  examples:[
    ex([['I','я'],['saw','увидел'],['a','—'],['dog','собаку'],['.','']]),
    ex([['The','—'],['dog','собака'],['was','была'],['very','очень'],['friendly','дружелюбной'],['.','']])
  ]
},
{
  id:'present-simple',
  title:'Present Simple',
  level:'B1',
  text:`Present Simple используется для регулярных действий, привычек, фактов и расписаний. Глагол в 3-м лице единственного числа получает окончание -s/-es.`,
  formula:'I/You/We/They + V(base) · He/She/It + V(-s/es) · вопрос: Do/Does + подлежащее + V?',
  examples:[
    ex([['She','она'],['works','работает'],['every','каждый'],['day','день'],['.','']]),
    ex([['Do','—'],['you','ты'],['like','любишь'],['coffee','кофе'],['?','']])
  ]
},
{
  id:'present-continuous',
  title:'Present Continuous',
  level:'B1',
  text:`Используется для действий, происходящих прямо сейчас, или для временных ситуаций, а также для запланированных действий в ближайшем будущем.`,
  formula:'подлежащее + am/is/are + V-ing',
  examples:[
    ex([['I','я'],['am','—'],['writing','пишу'],['an','—'],['email','письмо'],['now','сейчас'],['.','']]),
    ex([['They','они'],['are','—'],['meeting','встречаются'],['tomorrow','завтра'],['.','']])
  ]
},
{
  id:'present-perfect',
  title:'Present Perfect',
  level:'B2',
  text:`Используется для действий, которые произошли в прошлом, но связаны с настоящим (результат важен сейчас), либо для опыта без указания точного времени.`,
  formula:'подлежащее + have/has + V3 (Past Participle)',
  examples:[
    ex([['I','я'],['have','—'],['finished','закончил'],['my','мою'],['homework','домашнюю работу'],['.','']]),
    ex([['She','она'],['has','—'],['never','никогда'],['been','не была'],['to','в'],['Paris','Париже'],['.','']])
  ]
},
{
  id:'present-perfect-continuous',
  title:'Present Perfect Continuous',
  level:'B2',
  text:`Подчёркивает длительность действия, которое началось в прошлом и либо продолжается сейчас, либо только что закончилось, но его результат виден.`,
  formula:'подлежащее + have/has + been + V-ing',
  examples:[
    ex([['I','я'],['have','—'],['been','—'],['studying','учусь'],['English','английскому'],['for','уже'],['two','два'],['years','года'],['.','']])
  ]
},
{
  id:'past-simple',
  title:'Past Simple',
  level:'B1',
  text:`Используется для завершённых действий в прошлом с указанием (или подразумеванием) конкретного времени.`,
  formula:'подлежащее + V2 (Past) · вопрос: Did + подлежащее + V(base)?',
  examples:[
    ex([['We','мы'],['visited','посетили'],['London','Лондон'],['last','в прошлом'],['year','году'],['.','']]),
    ex([['Did','—'],['you','ты'],['call','звонил'],['her','ей'],['yesterday','вчера'],['?','']])
  ]
},
{
  id:'past-continuous',
  title:'Past Continuous',
  level:'B1',
  text:`Описывает действие, которое происходило в определённый момент в прошлом, часто в фоне другого события.`,
  formula:'подлежащее + was/were + V-ing',
  examples:[
    ex([['I','я'],['was','—'],['cooking','готовил'],['when','когда'],['he','он'],['called','позвонил'],['.','']])
  ]
},
{
  id:'past-perfect',
  title:'Past Perfect',
  level:'B2',
  text:`Используется для действия, которое произошло раньше другого действия в прошлом ("прошлое до прошлого").`,
  formula:'подлежащее + had + V3',
  examples:[
    ex([['She','она'],['had','—'],['already','уже'],['left','ушла'],['when','когда'],['I','я'],['arrived','приехал'],['.','']])
  ]
},
{
  id:'future-simple',
  title:'Future Simple (will)',
  level:'B1',
  text:`Используется для решений, принятых в момент речи, обещаний, предсказаний.`,
  formula:'подлежащее + will + V(base)',
  examples:[
    ex([['I','я'],['will','—'],['help','помогу'],['you','тебе'],['tomorrow','завтра'],['.','']])
  ]
},
{
  id:'going-to',
  title:'be going to',
  level:'B1',
  text:`Используется для заранее спланированных намерений и для предсказаний на основе явных признаков в настоящем.`,
  formula:'подлежащее + am/is/are + going to + V(base)',
  examples:[
    ex([['We','мы'],['are','—'],['going','—'],['to','—'],['travel','путешествовать'],['next','в следующем'],['month','месяце'],['.','']])
  ]
},
{
  id:'conditional1',
  title:'First Conditional (реальное будущее)',
  level:'B2',
  text:`Описывает реальные, возможные ситуации в будущем и их вероятные последствия.`,
  formula:'If + Present Simple, ... will + V(base)',
  examples:[
    ex([['If','если'],['it','это'],['rains','дождь'],[',',''],['I','я'],['will','—'],['stay','останусь'],['home','дома'],['.','']])
  ]
},
{
  id:'conditional2',
  title:'Second Conditional (нереальное настоящее/будущее)',
  level:'B2',
  text:`Описывает гипотетические, маловероятные или невозможные ситуации в настоящем или будущем.`,
  formula:'If + Past Simple, ... would + V(base)',
  examples:[
    ex([['If','если бы'],['I','я'],['had','имел'],['more','больше'],['time','времени'],[',',''],['I','я'],['would','—'],['travel','путешествовал бы'],['more','больше'],['.','']])
  ]
},
{
  id:'conditional3',
  title:'Third Conditional (нереальное прошлое)',
  level:'B2',
  text:`Описывает гипотетические ситуации в прошлом, которые не произошли, и их воображаемые последствия.`,
  formula:'If + Past Perfect, ... would have + V3',
  examples:[
    ex([['If','если бы'],['I','я'],['had','имел'],['known','знал'],[',',''],['I','я'],['would','—'],['have','—'],['helped','помог бы'],['you','тебе'],['.','']])
  ]
},
{
  id:'passive',
  title:'Passive Voice (страдательный залог)',
  level:'B2',
  text:`Используется, когда важнее само действие или объект, а не тот, кто его совершил.`,
  formula:'подлежащее + to be + V3 (+ by ...)',
  examples:[
    ex([['The','—'],['letter','письмо'],['was','было'],['written','написано'],['by','—'],['Anna','Анной'],['.','']])
  ]
},
{
  id:'modals',
  title:'Модальные глаголы (Modal Verbs)',
  level:'B1',
  text:`Can/could — возможность и умение, must/have to — необходимость, should — совет, may/might — вероятность.`,
  formula:'подлежащее + модальный глагол + V(base)',
  examples:[
    ex([['You','ты'],['should','—'],['drink','пить'],['more','больше'],['water','воды'],['.','']]),
    ex([['She','она'],['can','—'],['speak','говорить'],['three','на трёх'],['languages','языках'],['.','']])
  ]
},
{
  id:'reported-speech',
  title:'Косвенная речь (Reported Speech)',
  level:'B2',
  text:`При передаче чужих слов время глагола обычно "сдвигается назад" (Present → Past, Past → Past Perfect).`,
  formula:'He said that + подлежащее + V(в прошедшем времени)',
  examples:[
    ex([['He','он'],['said','сказал'],['that','что'],['he','он'],['was','был'],['tired','уставшим'],['.','']])
  ]
},
{
  id:'gerund-infinitive',
  title:'Gerund vs Infinitive',
  level:'B2',
  text:`Некоторые глаголы требуют после себя герундий (V-ing), другие — инфинитив (to + V). Это нужно запоминать по конкретным глаголам (enjoy + V-ing, want + to V).`,
  formula:'enjoy/finish/avoid + V-ing · want/decide/plan + to V',
  examples:[
    ex([['I','я'],['enjoy','люблю'],['reading','читать'],['books','книги'],['.','']]),
    ex([['She','она'],['wants','хочет'],['to','—'],['learn','выучить'],['French','французский'],['.','']])
  ]
},
{
  id:'comparatives',
  title:'Сравнительная и превосходная степень',
  level:'B1',
  text:`Короткие прилагательные (1-2 слога) получают окончания -er/-est. Длинные прилагательные используют more/most. Есть исключения: good — better — best, bad — worse — worst.`,
  formula:'short: cheap → cheaper → the cheapest · long: expensive → more expensive → the most expensive',
  examples:[
    ex([['This','этот'],['hotel','отель'],['is','—'],['cheaper','дешевле'],['than','чем'],['that','тот'],['one','—'],['.','']]),
    ex([['It','это'],['was','было'],['the','—'],['most','самое'],['interesting','интересное'],['film','кино'],['.','']])
  ]
},
{
  id:'countable-uncountable',
  title:'Countable / Uncountable + some, any, much, many',
  level:'B1',
  text:`Исчисляемые существительные (books, apples) имеют множественное число, неисчисляемые (water, information, advice) — нет. "Some" обычно в утверждениях, "any" — в вопросах/отрицаниях, "much" — с неисчисляемыми, "many" — с исчисляемыми.`,
  formula:'some/any + noun · much + неисчисл. · many + исчисл.',
  examples:[
    ex([['I','я'],['don\u2019t','не'],['have','имею'],['much','много'],['time','времени'],['.','']]),
    ex([['Are','—'],['there','там'],['any','какие-то'],['messages','сообщения'],['for','для'],['me','меня'],['?','']])
  ]
},
{
  id:'used-to',
  title:'used to / would (прошлые привычки)',
  level:'B2',
  text:`"Used to" описывает привычки или состояния в прошлом, которых больше нет. "Would" тоже описывает повторяющиеся действия в прошлом, но не используется для состояний (нельзя "would be").`,
  formula:'подлежащее + used to + V(base)',
  examples:[
    ex([['I','я'],['used','—'],['to','—'],['play','играть'],['football','в футбол'],['every','каждые'],['weekend','выходные'],['.','']])
  ]
},
{
  id:'prepositions-time-place',
  title:'Предлоги времени и места (in, on, at)',
  level:'B1',
  text:`"At" используется для точного времени и мест (at 5 o\u2019clock, at the station). "On" — для дней и дат (on Monday). "In" — для месяцев, лет, периодов и больших пространств (in July, in the city).`,
  formula:'at + время/точка · on + день/дата · in + период/пространство',
  examples:[
    ex([['The','—'],['meeting','встреча'],['is','—'],['at','в'],['9','9'],['on','в'],['Monday','понедельник'],['.','']])
  ]
},
{
  id:'linking-words',
  title:'Слова-связки (however, although, because, despite)',
  level:'B2',
  text:`Связующие слова помогают строить сложные предложения и звучать более естественно. "Because" — причина, "although/though" — уступка внутри предложения, "however" — противопоставление между предложениями, "despite/in spite of" + существительное/V-ing.`,
  formula:'..., although ... · However, ... · Despite + noun/V-ing, ...',
  examples:[
    ex([['Although','хотя'],['it','это'],['was','было'],['raining','дождливо'],[',',''],['we','мы'],['went','пошли'],['out','гулять'],['.','']])
  ]
},
{
  id:'phrasal-verbs',
  title:'Фразовые глаголы (введение)',
  level:'B2',
  text:`Фразовый глагол — это глагол + предлог/наречие, часто с новым, неочевидным значением. Например: give up (сдаваться), look after (заботиться), find out (узнавать), turn off (выключать).`,
  formula:'глагол + предлог/наречие = новое значение',
  examples:[
    ex([['She','она'],['gave','—'],['up','сдалась'],['smoking','курить'],['last','в прошлом'],['year','году'],['.','']]),
    ex([['Can','—'],['you','ты'],['look','—'],['after','присмотреть'],['my','за моей'],['cat','кошкой'],['?','']])
  ]
},
{
  id:'question-tags',
  title:'Разделительные вопросы (Question Tags)',
  level:'B2',
  text:`Короткий "хвостик" в конце предложения для уточнения ("не так ли?"). Если основная часть утвердительная — хвостик отрицательный, и наоборот.`,
  formula:'You are tired, aren\u2019t you? · She doesn\u2019t like it, does she?',
  examples:[
    ex([['You','ты'],['live','живёшь'],['here','здесь'],[',',''],['don\u2019t','не'],['you','ты'],['?','']])
  ]
}
];

/* ==================== СЛОВАРЬ ==================== */
/* формат: [англ, транскрипция, перевод, уровень] */
const DICTIONARY_RAW = [
['achieve','/əˈtʃiːv/','достигать','B2'],
['advice','/ədˈvaɪs/','совет','B1'],
['afford','/əˈfɔːd/','позволить себе','B1'],
['agree','/əˈɡriː/','соглашаться','B1'],
['amazing','/əˈmeɪzɪŋ/','удивительный','B1'],
['ambition','/æmˈbɪʃn/','амбиция','B2'],
['ancient','/ˈeɪnʃənt/','древний','B2'],
['annoy','/əˈnɔɪ/','раздражать','B1'],
['anxious','/ˈæŋkʃəs/','встревоженный','B2'],
['apologize','/əˈpɒlədʒaɪz/','извиняться','B1'],
['appreciate','/əˈpriːʃieɪt/','ценить','B2'],
['approach','/əˈprəʊtʃ/','подход','B2'],
['argue','/ˈɑːɡjuː/','спорить','B1'],
['available','/əˈveɪləbl/','доступный','B1'],
['average','/ˈævərɪdʒ/','средний','B1'],
['avoid','/əˈvɔɪd/','избегать','B1'],
['aware','/əˈweər/','осведомлённый','B2'],
['behave','/bɪˈheɪv/','вести себя','B1'],
['belief','/bɪˈliːf/','убеждение','B2'],
['benefit','/ˈbenɪfɪt/','польза','B1'],
['border','/ˈbɔːdər/','граница','B1'],
['brave','/breɪv/','смелый','B1'],
['breathe','/briːð/','дышать','B1'],
['brilliant','/ˈbrɪliənt/','блестящий','B1'],
['budget','/ˈbʌdʒɪt/','бюджет','B1'],
['cause','/kɔːz/','причина; вызывать','B1'],
['challenge','/ˈtʃælɪndʒ/','вызов, трудность','B1'],
['chase','/tʃeɪs/','преследовать','B1'],
['cheerful','/ˈtʃɪəfl/','весёлый','B1'],
['clever','/ˈklevər/','умный','B1'],
['collapse','/kəˈlæps/','рушиться','B2'],
['combine','/kəmˈbaɪn/','сочетать','B2'],
['comfort','/ˈkʌmfət/','комфорт','B1'],
['compare','/kəmˈpeər/','сравнивать','B1'],
['complain','/kəmˈpleɪn/','жаловаться','B1'],
['confident','/ˈkɒnfɪdənt/','уверенный','B1'],
['confuse','/kənˈfjuːz/','запутывать','B1'],
['consider','/kənˈsɪdər/','считать, рассматривать','B2'],
['consist','/kənˈsɪst/','состоять','B2'],
['convince','/kənˈvɪns/','убеждать','B2'],
['crucial','/ˈkruːʃl/','решающий, важный','B2'],
['curious','/ˈkjʊəriəs/','любопытный','B1'],
['damage','/ˈdæmɪdʒ/','повреждение','B1'],
['deal','/diːl/','сделка; иметь дело','B1'],
['decade','/ˈdekeɪd/','десятилетие','B1'],
['decision','/dɪˈsɪʒn/','решение','B1'],
['delay','/dɪˈleɪ/','задержка','B1'],
['demand','/dɪˈmɑːnd/','требовать','B2'],
['deny','/dɪˈnaɪ/','отрицать','B2'],
['depend','/dɪˈpend/','зависеть','B1'],
['describe','/dɪˈskraɪb/','описывать','B1'],
['determine','/dɪˈtɜːmɪn/','определять','B2'],
['develop','/dɪˈveləp/','развивать','B1'],
['disappoint','/ˌdɪsəˈpɔɪnt/','разочаровывать','B1'],
['discover','/dɪˈskʌvər/','обнаруживать','B1'],
['doubt','/daʊt/','сомнение','B1'],
['effort','/ˈefət/','усилие','B1'],
['embarrass','/ɪmˈbærəs/','смущать','B2'],
['encourage','/ɪnˈkʌrɪdʒ/','поощрять','B1'],
['environment','/ɪnˈvaɪrənmənt/','окружающая среда','B1'],
['equal','/ˈiːkwəl/','равный','B1'],
['essential','/ɪˈsenʃl/','важный, необходимый','B2'],
['exhausted','/ɪɡˈzɔːstɪd/','измотанный','B2'],
['expect','/ɪkˈspekt/','ожидать','B1'],
['experience','/ɪkˈspɪəriəns/','опыт','B1'],
['explain','/ɪkˈspleɪn/','объяснять','B1'],
['fair','/feər/','справедливый','B1'],
['fascinating','/ˈfæsɪneɪtɪŋ/','увлекательный','B2'],
['fault','/fɔːlt/','вина, ошибка','B1'],
['fear','/fɪər/','страх','B1'],
['flexible','/ˈfleksəbl/','гибкий','B2'],
['focus','/ˈfəʊkəs/','сосредотачиваться','B1'],
['fortunate','/ˈfɔːtʃənət/','удачливый','B2'],
['frustrated','/frʌˈstreɪtɪd/','разочарованный, расстроенный','B2'],
['gain','/ɡeɪn/','получать, приобретать','B1'],
['generous','/ˈdʒenərəs/','щедрый','B1'],
['genuine','/ˈdʒenjuɪn/','настоящий, искренний','B2'],
['goal','/ɡəʊl/','цель','B1'],
['grateful','/ˈɡreɪtfl/','благодарный','B1'],
['guilty','/ˈɡɪlti/','виновный','B1'],
['habit','/ˈhæbɪt/','привычка','B1'],
['handle','/ˈhændl/','справляться','B1'],
['harm','/hɑːm/','вред','B1'],
['honest','/ˈɒnɪst/','честный','B1'],
['hope','/həʊp/','надеяться','B1'],
['identify','/aɪˈdentɪfaɪ/','определять, узнавать','B2'],
['ignore','/ɪɡˈnɔːr/','игнорировать','B1'],
['immediate','/ɪˈmiːdiət/','немедленный','B2'],
['improve','/ɪmˈpruːv/','улучшать','B1'],
['include','/ɪnˈkluːd/','включать','B1'],
['increase','/ɪnˈkriːs/','увеличивать','B1'],
['independent','/ˌɪndɪˈpendənt/','независимый','B1'],
['influence','/ˈɪnfluəns/','влияние','B2'],
['insist','/ɪnˈsɪst/','настаивать','B2'],
['inspire','/ɪnˈspaɪər/','вдохновлять','B2'],
['instead','/ɪnˈsted/','вместо','B1'],
['involve','/ɪnˈvɒlv/','вовлекать','B2'],
['issue','/ˈɪʃuː/','проблема, вопрос','B1'],
['jealous','/ˈdʒeləs/','ревнивый','B1'],
['journey','/ˈdʒɜːni/','путешествие','B1'],
['judge','/dʒʌdʒ/','судить','B1'],
['justify','/ˈdʒʌstɪfaɪ/','оправдывать','B2'],
['knowledge','/ˈnɒlɪdʒ/','знание','B1'],
['lack','/læk/','нехватка','B1'],
['likely','/ˈlaɪkli/','вероятный','B1'],
['maintain','/meɪnˈteɪn/','поддерживать','B2'],
['manage','/ˈmænɪdʒ/','справляться, управлять','B1'],
['mention','/ˈmenʃn/','упоминать','B1'],
['mistake','/mɪˈsteɪk/','ошибка','B1'],
['nervous','/ˈnɜːvəs/','нервный','B1'],
['notice','/ˈnəʊtɪs/','замечать','B1'],
['obvious','/ˈɒbviəs/','очевидный','B1'],
['occur','/əˈkɜːr/','происходить','B2'],
['opportunity','/ˌɒpəˈtjuːnəti/','возможность','B1'],
['opposite','/ˈɒpəzɪt/','противоположный','B1'],
['organize','/ˈɔːɡənaɪz/','организовывать','B1'],
['overcome','/ˌəʊvəˈkʌm/','преодолевать','B2'],
['particular','/pəˈtɪkjələr/','особый, конкретный','B1'],
['patient','/ˈpeɪʃnt/','терпеливый','B1'],
['permanent','/ˈpɜːmənənt/','постоянный','B2'],
['persuade','/pəˈsweɪd/','убеждать','B2'],
['pleasant','/ˈpleznt/','приятный','B1'],
['pressure','/ˈpreʃər/','давление','B1'],
['prevent','/prɪˈvent/','предотвращать','B1'],
['proud','/praʊd/','гордый','B1'],
['purpose','/ˈpɜːpəs/','цель, назначение','B1'],
['reach','/riːtʃ/','достигать','B1'],
['realize','/ˈriːəlaɪz/','осознавать','B1'],
['recognize','/ˈrekəɡnaɪz/','узнавать, признавать','B1'],
['reduce','/rɪˈdjuːs/','сокращать','B1'],
['reject','/rɪˈdʒekt/','отвергать','B2'],
['relationship','/rɪˈleɪʃnʃɪp/','отношения','B1'],
['relevant','/ˈreləvənt/','актуальный, релевантный','B2'],
['reliable','/rɪˈlaɪəbl/','надёжный','B2'],
['relief','/rɪˈliːf/','облегчение','B2'],
['reluctant','/rɪˈlʌktənt/','неохотный','B2'],
['remind','/rɪˈmaɪnd/','напоминать','B1'],
['require','/rɪˈkwaɪər/','требовать','B1'],
['resource','/rɪˈsɔːs/','ресурс','B1'],
['respond','/rɪˈspɒnd/','отвечать, реагировать','B1'],
['responsible','/rɪˈspɒnsəbl/','ответственный','B1'],
['reveal','/rɪˈviːl/','раскрывать','B2'],
['rude','/ruːd/','грубый','B1'],
['satisfied','/ˈsætɪsfaɪd/','довольный','B1'],
['scared','/skeərd/','напуганный','B1'],
['sensible','/ˈsensəbl/','разумный','B2'],
['separate','/ˈsepərət/','отдельный','B1'],
['sharp','/ʃɑːp/','острый, резкий','B1'],
['shy','/ʃaɪ/','застенчивый','B1'],
['similar','/ˈsɪmələr/','похожий','B1'],
['skill','/skɪl/','навык','B1'],
['solve','/sɒlv/','решать','B1'],
['stubborn','/ˈstʌbən/','упрямый','B2'],
['succeed','/səkˈsiːd/','преуспевать','B1'],
['suggest','/səˈdʒest/','предлагать','B1'],
['suitable','/ˈsuːtəbl/','подходящий','B1'],
['support','/səˈpɔːt/','поддерживать','B1'],
['suppose','/səˈpəʊz/','предполагать','B1'],
['surround','/səˈraʊnd/','окружать','B2'],
['suspicious','/səˈspɪʃəs/','подозрительный','B2'],
['tend','/tend/','иметь тенденцию','B2'],
['thorough','/ˈθʌrə/','тщательный','B2'],
['threat','/θret/','угроза','B2'],
['tough','/tʌf/','трудный, жёсткий','B1'],
['unique','/juˈniːk/','уникальный','B1'],
['upset','/ʌpˈset/','расстроенный','B1'],
['urgent','/ˈɜːdʒənt/','срочный','B1'],
['value','/ˈvæljuː/','ценность','B1'],
['various','/ˈveəriəs/','различные','B1'],
['wonder','/ˈwʌndər/','интересоваться, удивляться','B1'],
['worth','/wɜːθ/','стоящий','B1'],
['accomplish','/əˈkʌmplɪʃ/','выполнять, добиваться','B2'],
['admit','/ədˈmɪt/','признавать','B1'],
['advantage','/ədˈvɑːntɪdʒ/','преимущество','B1'],
['alert','/əˈlɜːt/','бдительный, оповещать','B2'],
['analyze','/ˈænəlaɪz/','анализировать','B2'],
['announce','/əˈnaʊns/','объявлять','B1'],
['anticipate','/ænˈtɪsɪpeɪt/','предвидеть, ожидать','B2'],
['apparent','/əˈpærənt/','очевидный, явный','B2'],
['arrange','/əˈreɪndʒ/','организовывать, договариваться','B1'],
['assume','/əˈsjuːm/','предполагать','B2'],
['assure','/əˈʃʊər/','заверять','B2'],
['attach','/əˈtætʃ/','прикреплять','B1'],
['attempt','/əˈtempt/','попытка, пытаться','B1'],
['attitude','/ˈætɪtjuːd/','отношение (к чему-то)','B1'],
['attract','/əˈtrækt/','привлекать','B1'],
['awkward','/ˈɔːkwəd/','неловкий','B2'],
['bother','/ˈbɒðər/','беспокоить','B1'],
['boost','/buːst/','повышать, стимулировать','B2'],
['calm','/kɑːm/','спокойный','B1'],
['candidate','/ˈkændɪdət/','кандидат','B1'],
['capable','/ˈkeɪpəbl/','способный','B2'],
['career','/kəˈrɪər/','карьера','B1'],
['circumstance','/ˈsɜːkəmstəns/','обстоятельство','B2'],
['commit','/kəˈmɪt/','совершать, брать обязательство','B2'],
['complicated','/ˈkɒmplɪkeɪtɪd/','сложный','B1'],
['concern','/kənˈsɜːn/','беспокойство, касаться','B1'],
['conflict','/ˈkɒnflɪkt/','конфликт','B1'],
['conscious','/ˈkɒnʃəs/','осознанный, в сознании','B2'],
['constant','/ˈkɒnstənt/','постоянный','B1'],
['contribute','/kənˈtrɪbjuːt/','вносить вклад','B2'],
['courage','/ˈkʌrɪdʒ/','смелость','B1'],
['deadline','/ˈdedlaɪn/','крайний срок','B1'],
['deserve','/dɪˈzɜːv/','заслуживать','B2'],
['despite','/dɪˈspaɪt/','несмотря на','B2'],
['disturb','/dɪˈstɜːb/','беспокоить, мешать','B1'],
['eager','/ˈiːɡər/','страстно желающий','B2'],
['efficient','/ɪˈfɪʃnt/','эффективный','B2'],
['emphasize','/ˈemfəsaɪz/','подчёркивать','B2'],
['enthusiastic','/ɪnˌθjuːziˈæstɪk/','полный энтузиазма','B2'],
['establish','/ɪˈstæblɪʃ/','основывать, устанавливать','B2'],
['exceed','/ɪkˈsiːd/','превышать','B2'],
['exhibit','/ɪɡˈzɪbɪt/','демонстрировать, выставлять','B2'],
['fascinate','/ˈfæsɪneɪt/','увлекать, очаровывать','B2'],
['fond','/fɒnd/','любящий (быть fond of)','B1'],
['forgive','/fəˈɡɪv/','прощать','B1'],
['gorgeous','/ˈɡɔːdʒəs/','великолепный','B1'],
['grant','/ɡrɑːnt/','предоставлять; грант','B2'],
['guarantee','/ˌɡærənˈtiː/','гарантировать','B2'],
['hesitate','/ˈhezɪteɪt/','колебаться','B2'],
['humble','/ˈhʌmbl/','скромный','B2'],
['imply','/ɪmˈplaɪ/','подразумевать','B2'],
['impress','/ɪmˈpres/','впечатлять','B1'],
['inevitable','/ɪnˈevɪtəbl/','неизбежный','B2'],
['insight','/ˈɪnsaɪt/','понимание, инсайт','B2'],
['intend','/ɪnˈtend/','намереваться','B1'],
['interrupt','/ˌɪntəˈrʌpt/','прерывать','B1'],
['isolate','/ˈaɪsəleɪt/','изолировать','B2'],
['legitimate','/lɪˈdʒɪtɪmət/','законный, обоснованный','B2'],
['lonely','/ˈləʊnli/','одинокий','B1'],
['loyal','/ˈlɔɪəl/','верный, преданный','B1'],
['motivate','/ˈməʊtɪveɪt/','мотивировать','B1'],
['negotiate','/nɪˈɡəʊʃieɪt/','вести переговоры','B2'],
['obtain','/əbˈteɪn/','получать, добывать','B2'],
['overwhelmed','/ˌəʊvəˈwelmd/','подавленный (эмоционально)','B2'],
['passion','/ˈpæʃn/','страсть','B1'],
['peaceful','/ˈpiːsfl/','мирный, спокойный','B1'],
['polite','/pəˈlaɪt/','вежливый','B1'],
['possess','/pəˈzes/','обладать','B2'],
['practical','/ˈpræktɪkl/','практичный','B1'],
['precise','/prɪˈsaɪs/','точный','B2'],
['prefer','/prɪˈfɜːr/','предпочитать','B1'],
['prioritize','/praɪˈɒrɪtaɪz/','расставлять приоритеты','B2'],
['promote','/prəˈməʊt/','продвигать','B2'],
['recommend','/ˌrekəˈmend/','рекомендовать','B1'],
['reflect','/rɪˈflekt/','отражать, размышлять','B2'],
['reject','/rɪˈdʒekt/','отклонять','B2'],
['reluctantly','/rɪˈlʌktəntli/','неохотно','B2'],
['resent','/rɪˈzent/','негодовать, обижаться','B2'],
['resist','/rɪˈzɪst/','сопротивляться','B2'],
['reward','/rɪˈwɔːd/','награда','B1'],
['sincere','/sɪnˈsɪər/','искренний','B2'],
['strict','/strɪkt/','строгий','B1'],
['struggle','/ˈstrʌɡl/','бороться, трудность','B1'],
['sympathetic','/ˌsɪmpəˈθetɪk/','сочувствующий','B2'],
['tolerant','/ˈtɒlərənt/','терпимый','B2'],
['trustworthy','/ˈtrʌstwɜːði/','заслуживающий доверия','B2'],
['vague','/veɪɡ/','неясный, расплывчатый','B2'],
['vulnerable','/ˈvʌlnərəbl/','уязвимый','B2'],
['wander','/ˈwɒndər/','бродить','B2'],
['whereas','/weərˈæz/','тогда как, в то время как','B2'],
['wisdom','/ˈwɪzdəm/','мудрость','B2']
];

const DICTIONARY = DICTIONARY_RAW.map(([en,transcr,ru,level])=>({en,transcr,ru,level}));

/* ==================== БАНК ТЕСТОВ (ГРАММАТИКА) ==================== */
const QUIZ_BANK = [
{level:'B1', q:'She ___ to work every day.', options:['go','goes','going','gone'], correct:1, topic:'Present Simple'},
{level:'B1', q:'Right now, I ___ dinner.', options:['cook','cooks','am cooking','cooked'], correct:2, topic:'Present Continuous'},
{level:'B1', q:'We ___ to Italy last summer.', options:['go','went','have gone','goes'], correct:1, topic:'Past Simple'},
{level:'B1', q:'While I ___ TV, the phone rang.', options:['watched','was watching','watch','have watched'], correct:1, topic:'Past Continuous'},
{level:'B1', q:'I promise I ___ help you tomorrow.', options:['will','am','was','did'], correct:0, topic:'Future Simple'},
{level:'B1', q:'Choose the correct article: I saw ___ elephant at the zoo.', options:['a','an','the','-'], correct:1, topic:'Articles'},
{level:'B1', q:'You ___ smoke here, it is forbidden.', options:['can','must not','should','may'], correct:1, topic:'Modal Verbs'},
{level:'B1', q:'They ___ finished their homework yet? (question)', options:['Do','Did','Have','Has'], correct:2, topic:'Present Perfect'},
{level:'B2', q:'I ___ never ___ sushi before yesterday.', options:['have / eaten','had / eaten','has / eaten','was / eating'], correct:1, topic:'Past Perfect'},
{level:'B2', q:'If it rains tomorrow, I ___ stay home.', options:['will','would','had','was'], correct:0, topic:'First Conditional'},
{level:'B2', q:'If I ___ more money, I would travel the world.', options:['have','had','has','will have'], correct:1, topic:'Second Conditional'},
{level:'B2', q:'If she had studied harder, she ___ passed the exam.', options:['would','would have','will have','had'], correct:1, topic:'Third Conditional'},
{level:'B2', q:'The book ___ by millions of people.', options:['reads','has read','has been read','is reading'], correct:2, topic:'Passive Voice'},
{level:'B2', q:'He said that he ___ tired.', options:['is','was','be','being'], correct:1, topic:'Reported Speech'},
{level:'B2', q:'She enjoys ___ books in her free time.', options:['read','to read','reading','reads'], correct:2, topic:'Gerund/Infinitive'},
{level:'B2', q:'I have been ___ English for three years.', options:['study','studied','studying','studies'], correct:2, topic:'Present Perfect Continuous'},
{level:'B1', q:'This is ___ interesting movie I have ever seen.', options:['a','an','the','most'], correct:2, topic:'Articles'},
{level:'B1', q:'We ___ going to visit our grandparents next week.', options:['is','am','are','be'], correct:2, topic:'be going to'},
{level:'B2', q:'You ___ have called me — I was worried!', options:['should','can','must','might'], correct:0, topic:'Modal Verbs'},
{level:'B1', q:'___ you like some tea?', options:['Do','Would','Are','Did'], correct:1, topic:'Polite requests'},
{level:'B1', q:'This bag is ___ than mine.', options:['cheap','cheaper','the cheapest','more cheap'], correct:1, topic:'Comparatives'},
{level:'B1', q:'It was ___ film of the year.', options:['good','better','the best','more good'], correct:2, topic:'Superlatives'},
{level:'B1', q:'I don\u2019t have ___ friends here.', options:['much','many','a lot','any'], correct:1, topic:'Countable/Uncountable'},
{level:'B1', q:'There isn\u2019t ___ milk left.', options:['many','much','few','any'], correct:1, topic:'Countable/Uncountable'},
{level:'B2', q:'When I was a child, I ___ to climb trees.', options:['use','used','was using','would used'], correct:1, topic:'used to'},
{level:'B1', q:'The train leaves ___ 7 o\u2019clock.', options:['in','on','at','by'], correct:2, topic:'Prepositions'},
{level:'B1', q:'Her birthday is ___ March.', options:['at','on','in','for'], correct:2, topic:'Prepositions'},
{level:'B2', q:'___ the rain, we went for a walk.', options:['Although','Despite','Because','However'], correct:1, topic:'Linking words'},
{level:'B2', q:'She is quiet, ___ her sister is very talkative.', options:['whereas','despite','because','so'], correct:0, topic:'Linking words'},
{level:'B2', q:'I need to ___ this problem before Monday.', options:['find out','look after','sort out','give up'], correct:2, topic:'Phrasal Verbs'},
{level:'B2', q:'He never ___ smoking, even though it\u2019s bad for him.', options:['gave up','gave out','gave in','gave away'], correct:0, topic:'Phrasal Verbs'},
{level:'B2', q:'You live in Kyiv, ___ you?', options:['do','don\u2019t','aren\u2019t','are'], correct:1, topic:'Question Tags'}
];

/* ==================== ТЕМЫ ДЛЯ ДИАЛОГОВ ==================== */
const DIALOGUE_TOPICS = [
  {id:'work', label:'Работа', icon:'💼'},
  {id:'study', label:'Учёба', icon:'🎓'},
  {id:'friends', label:'Друзья', icon:'🧑‍🤝‍🧑'},
  {id:'love', label:'Отношения', icon:'❤️'},
  {id:'daily', label:'Повседневность', icon:'🏠'},
  {id:'travel', label:'Путешествия', icon:'✈️'},
  {id:'transport', label:'Транспорт', icon:'🚌'}
];

/* ==================== ДИАЛОГИ ==================== */
const DIALOGUES = [
/* ---------- WORK ---------- */
{
  id:'work-1', topicId:'work', level:'B1', title:'Собеседование на работу',
  lines:[
    {speaker:'A', text: ex([['Good','добрый'],['morning','день'],['!',''],['Please','пожалуйста'],['have','присаживайтесь'],['a','—'],['seat','сядьте'],['.','']])},
    {speaker:'B', text: ex([['Thank','спасибо'],['you','вам'],['.','']])},
    {speaker:'A', text: ex([['Can','—'],['you','вы'],['tell','рассказать'],['me','мне'],['about','о'],['your','вашем'],['experience','опыте'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['have','имею'],['worked','работал'],['as','как'],['a','—'],['manager','менеджер'],['for','в течение'],['three','трёх'],['years','лет'],['.','']])},
    {speaker:'A', text: ex([['What','что'],['are','являются'],['your','вашими'],['strengths','сильными сторонами'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['am','—'],['organized','организованный'],['and','и'],['I','я'],['work','работаю'],['well','хорошо'],['under','под'],['pressure','давлением'],['.','']])},
    {speaker:'A', text: ex([['When','когда'],['can','можете'],['you','вы'],['start','начать'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['can','могу'],['start','начать'],['next','на следующей'],['week','неделе'],['.','']])}
  ],
  quiz:{blankIndex:5, options:['I am organized and I work well under pressure.','I hate working with people.','I don\u2019t have any skills.'], correct:0}
},
{
  id:'work-2', topicId:'work', level:'B2', title:'Разговор с коллегой о дедлайне',
  lines:[
    {speaker:'A', text: ex([['Hey','эй'],[',',''],['how','как'],['is','идёт'],['the','—'],['project','проект'],['going','дела'],['?','']])},
    {speaker:'B', text: ex([['Honestly','честно'],[',',''],['I','я'],['am','—'],['a','—'],['bit','немного'],['behind','отстаю'],['schedule','от графика'],['.','']])},
    {speaker:'A', text: ex([['Do','—'],['you','ты'],['need','нужна'],['any','какая-то'],['help','помощь'],['?','']])},
    {speaker:'B', text: ex([['That','это'],['would','было бы'],['be','—'],['great','отлично'],[',',''],['thanks','спасибо'],['.','']])},
    {speaker:'A', text: ex([['Let\u2019s','давай'],['split','разделим'],['the','—'],['tasks','задачи'],['.','']])},
    {speaker:'B', text: ex([['Sounds','звучит'],['good','хорошо'],['.',''],['I','я'],['will','—'],['finish','закончу'],['my','мою'],['part','часть'],['by','к'],['Friday','пятнице'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['Do you need any help?','Why are you always late?','I don\u2019t care about the deadline.'], correct:0}
},

/* ---------- STUDY ---------- */
{
  id:'study-1', topicId:'study', level:'B1', title:'Разговор перед экзаменом',
  lines:[
    {speaker:'A', text: ex([['Are','—'],['you','ты'],['ready','готов'],['for','к'],['the','—'],['exam','экзамену'],['?','']])},
    {speaker:'B', text: ex([['Not','не'],['really','совсем'],[',',''],['I','я'],['am','—'],['a','—'],['bit','немного'],['nervous','нервный'],['.','']])},
    {speaker:'A', text: ex([['Have','—'],['you','ты'],['studied','учил'],['the','—'],['grammar','грамматику'],['rules','правила'],['?','']])},
    {speaker:'B', text: ex([['Yes','да'],[',',''],['but','но'],['I','я'],['still','всё ещё'],['need','нужно'],['to','—'],['practice','практиковать'],['more','больше'],['.','']])},
    {speaker:'A', text: ex([['Let\u2019s','давай'],['revise','повторим'],['together','вместе'],['.','']])},
    {speaker:'B', text: ex([['Good','хорошая'],['idea','идея'],['!','']])}
  ],
  quiz:{blankIndex:4, options:['Let\u2019s revise together.','I don\u2019t want to study.','Forget about the exam.'], correct:0}
},
{
  id:'study-2', topicId:'study', level:'B2', title:'Выбор университета',
  lines:[
    {speaker:'A', text: ex([['Which','какой'],['university','университет'],['are','—'],['you','ты'],['applying','подаёшь'],['to','—'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['am','—'],['considering','рассматриваю'],['two','два'],['options','варианта'],['.','']])},
    {speaker:'A', text: ex([['What','что'],['is','—'],['the','—'],['difference','разница'],['?','']])},
    {speaker:'B', text: ex([['One','один'],['has','имеет'],['a','—'],['better','лучшую'],['reputation','репутацию'],[',',''],['but','но'],['it','это'],['is','—'],['more','более'],['expensive','дорогой'],['.','']])},
    {speaker:'A', text: ex([['I','я'],['would','—'],['focus','сосредоточился бы'],['on','на'],['the','—'],['program','программе'],['itself','самой'],['.','']])},
    {speaker:'B', text: ex([['That','это'],['makes','делает'],['sense','смысл'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['What is the difference?','I don\u2019t like studying.','Can you lend me money?'], correct:0}
},

/* ---------- FRIENDS ---------- */
{
  id:'friends-1', topicId:'friends', level:'B1', title:'Планы на выходные',
  lines:[
    {speaker:'A', text: ex([['What','что'],['are','—'],['you','ты'],['doing','делаешь'],['this','в эти'],['weekend','выходные'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['don\u2019t','не'],['have','имею'],['any','какие-то'],['plans','планы'],['yet','ещё'],['.','']])},
    {speaker:'A', text: ex([['Do','—'],['you','ты'],['want','хочешь'],['to','—'],['go','пойти'],['to','в'],['the','—'],['cinema','кино'],['?','']])},
    {speaker:'B', text: ex([['Sure','конечно'],[',',''],['that','это'],['sounds','звучит'],['fun','весело'],['!','']])},
    {speaker:'A', text: ex([['Great','отлично'],[',',''],['let\u2019s','давай'],['meet','встретимся'],['at','в'],['six','шесть'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['Do you want to go to the cinema?','I never want to see you again.','I am too busy for friends.'], correct:0}
},
{
  id:'friends-2', topicId:'friends', level:'B2', title:'Ссора и примирение',
  lines:[
    {speaker:'A', text: ex([['I','я'],['am','—'],['sorry','извини'],['I','я'],['forgot','забыл'],['your','твой'],['birthday','день рождения'],['.','']])},
    {speaker:'B', text: ex([['It','это'],['really','действительно'],['hurt','обидело'],['my','мои'],['feelings','чувства'],['.','']])},
    {speaker:'A', text: ex([['I','я'],['understand','понимаю'],['.',''],['I','я'],['will','—'],['make','сделаю'],['it','это'],['up','взамен'],['to','—'],['you','тебе'],['.','']])},
    {speaker:'B', text: ex([['Okay','хорошо'],[',',''],['I','я'],['appreciate','ценю'],['that','это'],['.','']])},
    {speaker:'A', text: ex([['Friends','друзья'],['again','снова'],['?','']])},
    {speaker:'B', text: ex([['Friends','друзья'],['again','снова'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['I understand. I will make it up to you.','It doesn\u2019t matter, forget it forever.','I don\u2019t care about your feelings.'], correct:0}
},

/* ---------- LOVE ---------- */
{
  id:'love-1', topicId:'love', level:'B1', title:'Первое свидание',
  lines:[
    {speaker:'A', text: ex([['You','ты'],['look','выглядишь'],['amazing','потрясающе'],['tonight','сегодня вечером'],['.','']])},
    {speaker:'B', text: ex([['Thank','спасибо'],['you','тебе'],[',',''],['that','это'],['is','—'],['sweet','мило'],['.','']])},
    {speaker:'A', text: ex([['I','я'],['am','—'],['really','действительно'],['glad','рад'],['we','мы'],['met','встретились'],['.','']])},
    {speaker:'B', text: ex([['Me','мне'],['too','тоже'],['.',''],['I','я'],['was','был'],['a','—'],['little','немного'],['nervous','нервным'],['before','до'],['.','']])},
    {speaker:'A', text: ex([['Would','—'],['you','ты'],['like','хотела бы'],['to','—'],['meet','встретиться'],['again','снова'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['would','—'],['love','с удовольствием'],['to','—'],['.','']])}
  ],
  quiz:{blankIndex:4, options:['Would you like to meet again?','I don\u2019t think we should talk.','I forgot your name already.'], correct:0}
},
{
  id:'love-2', topicId:'love', level:'B2', title:'Серьёзный разговор в отношениях',
  lines:[
    {speaker:'A', text: ex([['We','мы'],['need','нужно'],['to','—'],['talk','поговорить'],['about','о'],['us','нас'],['.','']])},
    {speaker:'B', text: ex([['Is','—'],['something','что-то'],['wrong','не так'],['?','']])},
    {speaker:'A', text: ex([['I','я'],['feel','чувствую'],['like','что'],['we','мы'],['do','—'],['not','не'],['spend','проводим'],['enough','достаточно'],['time','времени'],['together','вместе'],['.','']])},
    {speaker:'B', text: ex([['You','ты'],['are','—'],['right','прав'],[',',''],['I','я'],['have','—'],['been','был'],['too','слишком'],['busy','занят'],['.','']])},
    {speaker:'A', text: ex([['Can','—'],['we','мы'],['plan','запланировать'],['more','больше'],['time','времени'],['for','для'],['each','друг'],['other','друга'],['?','']])},
    {speaker:'B', text: ex([['Of','—'],['course','конечно'],[',',''],['that','это'],['matters','важно'],['to','—'],['me','мне'],['too','тоже'],['.','']])}
  ],
  quiz:{blankIndex:1, options:['Is something wrong?','I don\u2019t want to know.','That\u2019s not my problem.'], correct:0}
},

/* ---------- DAILY ---------- */
{
  id:'daily-1', topicId:'daily', level:'B1', title:'Утро в семье',
  lines:[
    {speaker:'A', text: ex([['Good','доброе'],['morning','утро'],['!',''],['Did','—'],['you','ты'],['sleep','спал'],['well','хорошо'],['?','']])},
    {speaker:'B', text: ex([['Yes','да'],[',',''],['thanks','спасибо'],['.',''],['What','что'],['is','—'],['for','на'],['breakfast','завтрак'],['?','']])},
    {speaker:'A', text: ex([['I','я'],['made','приготовил'],['eggs','яйца'],['and','и'],['toast','тосты'],['.','']])},
    {speaker:'B', text: ex([['Smells','пахнет'],['delicious','вкусно'],['!','']])},
    {speaker:'A', text: ex([['Don\u2019t','не'],['forget','забудь'],['your','твой'],['umbrella','зонт'],[',',''],['it','это'],['might','может'],['rain','пойти дождь'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['I made eggs and toast.','I broke the kitchen.','I ate everything already.'], correct:0}
},
{
  id:'daily-2', topicId:'daily', level:'B2', title:'Домашние обязанности',
  lines:[
    {speaker:'A', text: ex([['Could','—'],['you','ты'],['do','сделать'],['the','—'],['dishes','посуду'],['tonight','сегодня вечером'],['?','']])},
    {speaker:'B', text: ex([['I','я'],['was','—'],['about','собирался'],['to','—'],[',',''],['actually','вообще-то'],['.','']])},
    {speaker:'A', text: ex([['Also','также'],[',',''],['we','мы'],['are','—'],['running','заканчиваются'],['out','—'],['of','—'],['milk','молоко'],['.','']])},
    {speaker:'B', text: ex([['I','я'],['will','—'],['buy','куплю'],['some','немного'],['on','по'],['my','моему'],['way','пути'],['home','домой'],['.','']])},
    {speaker:'A', text: ex([['Thanks','спасибо'],[',',''],['that','это'],['helps','помогает'],['a','—'],['lot','сильно'],['.','']])}
  ],
  quiz:{blankIndex:3, options:['I will buy some on my way home.','I never go shopping.','That is not my job.'], correct:0}
},

/* ---------- TRAVEL ---------- */
{
  id:'travel-1', topicId:'travel', level:'B1', title:'Заселение в отель',
  lines:[
    {speaker:'A', text: ex([['Hello','здравствуйте'],[',',''],['I','я'],['have','имею'],['a','—'],['reservation','бронь'],['.','']])},
    {speaker:'B', text: ex([['Could','—'],['I','я'],['have','получить'],['your','вашу'],['name','имя'],[',',''],['please','пожалуйста'],['?','']])},
    {speaker:'A', text: ex([['It','это'],['is','—'],['under','под'],['Smith','Смит'],['.','']])},
    {speaker:'B', text: ex([['Here','вот'],['is','—'],['your','ваш'],['key','ключ'],['.',''],['Room','номер'],['205','205'],['.','']])},
    {speaker:'A', text: ex([['What','во'],['time','сколько'],['is','—'],['breakfast','завтрак'],['?','']])},
    {speaker:'B', text: ex([['From','с'],['seven','семи'],['to','до'],['ten','десяти'],['.','']])}
  ],
  quiz:{blankIndex:1, options:['Could I have your name, please?','Why are you here?','We are fully booked forever.'], correct:0}
},
{
  id:'travel-2', topicId:'travel', level:'B2', title:'Опоздание на рейс',
  lines:[
    {speaker:'A', text: ex([['Excuse','извините'],['me','меня'],[',',''],['I','я'],['think','думаю'],['I','я'],['missed','пропустил'],['my','мой'],['flight','рейс'],['.','']])},
    {speaker:'B', text: ex([['Let','—'],['me','мне'],['check','проверить'],['the','—'],['system','систему'],['.','']])},
    {speaker:'A', text: ex([['Is','—'],['there','там'],['another','другой'],['flight','рейс'],['today','сегодня'],['?','']])},
    {speaker:'B', text: ex([['Yes','да'],[',',''],['there','там'],['is','есть'],['one','один'],['at','в'],['6','6'],['pm','вечера'],['.','']])},
    {speaker:'A', text: ex([['Can','—'],['I','я'],['book','забронировать'],['a','—'],['seat','место'],['on','на'],['it','него'],['?','']])},
    {speaker:'B', text: ex([['Of','—'],['course','конечно'],[',',''],['let','—'],['me','мне'],['help','помочь'],['you','вам'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['Is there another flight today?','I don\u2019t want to fly anymore.','Can I get a refund for my house?'], correct:0}
},

/* ---------- TRANSPORT ---------- */
{
  id:'transport-1', topicId:'transport', level:'B1', title:'В автобусе',
  lines:[
    {speaker:'A', text: ex([['Excuse','извините'],['me','меня'],[',',''],['does','едет ли'],['this','этот'],['bus','автобус'],['go','—'],['to','до'],['the','—'],['station','вокзала'],['?','']])},
    {speaker:'B', text: ex([['Yes','да'],[',',''],['it','он'],['does','едет'],['.','']])},
    {speaker:'A', text: ex([['How','сколько'],['many','—'],['stops','остановок'],['is','—'],['it','это'],['?','']])},
    {speaker:'B', text: ex([['About','примерно'],['five','пять'],['stops','остановок'],['.','']])},
    {speaker:'A', text: ex([['Thank','спасибо'],['you','вам'],['very','очень'],['much','сильно'],['.','']])}
  ],
  quiz:{blankIndex:2, options:['How many stops is it?','Why is the bus red?','Do you like buses?'], correct:0}
},
{
  id:'transport-2', topicId:'transport', level:'B2', title:'Такси в аэропорт',
  lines:[
    {speaker:'A', text: ex([['I','я'],['need','нужно'],['a','—'],['taxi','такси'],['to','до'],['the','—'],['airport','аэропорта'],['.','']])},
    {speaker:'B', text: ex([['Sure','конечно'],[',',''],['when','когда'],['do','—'],['you','вы'],['need','нужно'],['it','это'],['?','']])},
    {speaker:'A', text: ex([['In','через'],['thirty','тридцать'],['minutes','минут'],[',',''],['if','если'],['possible','возможно'],['.','']])},
    {speaker:'B', text: ex([['That','это'],['should','должно'],['be','быть'],['fine','нормально'],['.','']])},
    {speaker:'A', text: ex([['How','сколько'],['much','—'],['will','—'],['it','это'],['cost','будет стоить'],['?','']])},
    {speaker:'B', text: ex([['Around','около'],['twenty','двадцати'],['dollars','долларов'],['.','']])}
  ],
  quiz:{blankIndex:4, options:['How much will it cost?','Do you like taxis?','Where were you born?'], correct:0}
}
];

/* ==================== ПРОГРЕСС ПОЛЬЗОВАТЕЛЯ (localStorage) ==================== */
const PROGRESS_KEY = 'englevel_progress_v1';

function loadProgress(){
  try{
    const raw = localStorage.getItem(PROGRESS_KEY);
    if(!raw) throw new Error('empty');
    return JSON.parse(raw);
  }catch(e){
    return { knownWords:[], viewedTopics:[], dialoguesDone:[], quizHistory:[] };
  }
}
function saveProgress(p){
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
let PROGRESS = loadProgress();

function toggleKnownWord(en){
  const i = PROGRESS.knownWords.indexOf(en);
  if(i>=0) PROGRESS.knownWords.splice(i,1);
  else PROGRESS.knownWords.push(en);
  saveProgress(PROGRESS);
}
function isWordKnown(en){ return PROGRESS.knownWords.includes(en); }

function markTopicViewed(id){
  if(!PROGRESS.viewedTopics.includes(id)){
    PROGRESS.viewedTopics.push(id);
    saveProgress(PROGRESS);
  }
}
function markDialogueDone(id){
  if(!PROGRESS.dialoguesDone.includes(id)){
    PROGRESS.dialoguesDone.push(id);
    saveProgress(PROGRESS);
  }
}
function addQuizResult(score,total){
  PROGRESS.quizHistory.push({date:new Date().toISOString(), score, total});
  saveProgress(PROGRESS);
}
function resetProgress(){
  PROGRESS = { knownWords:[], viewedTopics:[], dialoguesDone:[], quizHistory:[] };
  saveProgress(PROGRESS);
}

/* ==================== СОСТОЯНИЕ НАВИГАЦИИ ==================== */
let currentLevel = 'all';
let currentPage = 'home';

const app = document.getElementById('app');
const levelSelect = document.getElementById('levelSelect');
const navButtons = document.querySelectorAll('.nav-btn');

levelSelect.addEventListener('change', ()=>{
  currentLevel = levelSelect.value;
  render();
});

navButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    navButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentPage = btn.dataset.page;
    render();
  });
});

function goPage(page){
  navButtons.forEach(b=>b.classList.toggle('active', b.dataset.page===page));
  currentPage = page;
  render();
}

function filterByLevel(arr){
  if(currentLevel==='all') return arr;
  return arr.filter(item => item.level === currentLevel);
}

/* ==================== РЕНДЕР ПРИМЕРА СО СЛОВАМИ-ПОДСКАЗКАМИ ==================== */
function renderExample(pairs){
  const div = document.createElement('div');
  div.className = 'example';

  const fullText = pairs.map(p=>p[0]).join(' ').replace(/ ([,.?!])/g,'$1');
  div.appendChild(speakerBtn(fullText,'sm'));

  pairs.forEach(([en,ru])=>{
    const span = document.createElement('span');
    if(ru){
      span.className = 'word';
      span.innerHTML = en + ' <span class="tr">'+ru+'</span>';
      span.addEventListener('click', ()=> span.classList.toggle('show'));
    } else {
      span.textContent = en + ' ';
      span.style.marginRight = '2px';
    }
    div.appendChild(span);
    div.append(' ');
  });
  return div;
}

/* ==================== ГЛАВНАЯ (с дашбордом прогресса) ==================== */
function renderHome(){
  const totalWords = DICTIONARY.length;
  const knownWords = PROGRESS.knownWords.length;
  const totalTopics = GRAMMAR.length;
  const viewedTopics = PROGRESS.viewedTopics.length;
  const totalDialogues = DIALOGUES.length;
  const doneDialogues = PROGRESS.dialoguesDone.length;
  const quizzesTaken = PROGRESS.quizHistory.length;
  const avgScore = quizzesTaken
    ? Math.round(PROGRESS.quizHistory.reduce((s,q)=>s+q.score/q.total,0)/quizzesTaken*100)
    : null;

  app.innerHTML = `
    <h1>Добро пожаловать в EngLevel 👋</h1>
    <p class="muted">Учебник + тренажёр английского языка, нацеленный на уровень B1-B2.</p>

    <div class="card" style="margin-top:16px;">
      <h2>Твой прогресс</h2>
      <div class="progress-row">
        <div class="progress-label"><span>Слова выучены</span><span>${knownWords} / ${totalWords}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(knownWords/totalWords*100)}%"></div></div>
      </div>
      <div class="progress-row">
        <div class="progress-label"><span>Темы грамматики изучены</span><span>${viewedTopics} / ${totalTopics}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(viewedTopics/totalTopics*100)}%"></div></div>
      </div>
      <div class="progress-row">
        <div class="progress-label"><span>Диалоги пройдены</span><span>${doneDialogues} / ${totalDialogues}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(doneDialogues/totalDialogues*100)}%"></div></div>
      </div>
      <p class="muted" style="margin-top:10px;">Тестов пройдено: ${quizzesTaken}${avgScore!==null ? ' · средний результат: '+avgScore+'%' : ''}</p>
      <button class="btn secondary" id="resetProgressBtn" style="margin-top:8px;">Сбросить прогресс</button>
    </div>

    <div class="grid" style="margin-top:20px;">
      <div class="tile" data-go="theory"><h3>📖 Теория</h3><p class="muted">Все основные времена, артикли, пассив, условные предложения и другие темы с примерами.</p></div>
      <div class="tile" data-go="dictionary"><h3>🔤 Словарь</h3><p class="muted">Полезные слова по алфавиту с произношением, транскрипцией и переводом.</p></div>
      <div class="tile" data-go="practice"><h3>✏️ Практика</h3><p class="muted">Тесты и упражнения на сопоставление с моментальной проверкой.</p></div>
      <div class="tile" data-go="dialogues"><h3>💬 Диалоги</h3><p class="muted">Практика живых диалогов на разные темы: работа, учёба, путешествия и другие.</p></div>
      <div class="tile" data-go="ai"><h3>🤖 ИИ-помощник</h3><p class="muted">Задай вопрос про грамматику или попроси объяснить слово.</p></div>
    </div>
  `;
  app.querySelectorAll('.tile').forEach(t=>{
    t.addEventListener('click', ()=> goPage(t.dataset.go));
  });
  document.getElementById('resetProgressBtn').addEventListener('click', ()=>{
    if(confirm('Точно сбросить весь прогресс?')){
      resetProgress();
      renderHome();
    }
  });
}

/* ==================== ТЕОРИЯ ==================== */
function renderTheoryList(){
  const topics = filterByLevel(GRAMMAR);
  app.innerHTML = `
    <h1>Теория</h1>
    <p class="muted">Выбери тему, чтобы посмотреть правило, формулу и примеры. Изученные темы отмечены ✓.</p>
    <div class="grid" id="topicGrid"></div>
  `;
  const grid = document.getElementById('topicGrid');
  topics.forEach(t=>{
    const tile = document.createElement('div');
    tile.className = 'tile';
    const viewed = PROGRESS.viewedTopics.includes(t.id);
    tile.innerHTML = `<span class="tag ${t.level==='B2'?'b2':''}">${t.level}</span> ${viewed?'<span class="check">✓</span>':''}<h3>${t.title}</h3>`;
    tile.addEventListener('click', ()=> renderTheoryDetail(t.id));
    grid.appendChild(tile);
  });
}

function renderTheoryDetail(id){
  const topic = GRAMMAR.find(g=>g.id===id);
  markTopicViewed(id);
  app.innerHTML = '';
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.textContent = '← Назад к темам';
  back.addEventListener('click', renderTheoryList);
  app.appendChild(back);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <span class="tag ${topic.level==='B2'?'b2':''}">${topic.level}</span>
    <h2>${topic.title}</h2>
    <p>${topic.text}</p>
    <div class="formula">${topic.formula}</div>
  `;

  if(VISUALS[topic.id]){
    const visualWrap = document.createElement('div');
    visualWrap.className = 'visual-box';
    visualWrap.innerHTML = '<h3 style="margin:14px 0 8px;font-size:15px;color:var(--muted);">🖼️ Визуализация:</h3>' + VISUALS[topic.id];
    card.appendChild(visualWrap);
  }

  const examplesTitle = document.createElement('h3');
  examplesTitle.style.cssText = 'margin-top:16px;font-size:15px;color:var(--muted);';
  examplesTitle.textContent = 'Примеры (клик по слову — перевод, 🔊 — произношение):';
  card.appendChild(examplesTitle);

  topic.examples.forEach(pairs=> card.appendChild(renderExample(pairs)));
  app.appendChild(card);
}

/* ==================== СЛОВАРЬ ==================== */
let dictLetter = 'ALL';
let dictSearch = '';
let dictOnlyUnknown = false;

function renderDictionary(){
  const letters = ['ALL', ...Array.from(new Set(DICTIONARY.map(w=>w.en[0].toUpperCase()))).sort()];
  app.innerHTML = `
    <h1>Словарь</h1>
    <input type="text" class="search-box" id="dictSearch" placeholder="Поиск слова (англ. или рус.)..." value="${dictSearch}">
    <label class="checkbox-row"><input type="checkbox" id="onlyUnknown" ${dictOnlyUnknown?'checked':''}> Показывать только невыученные</label>
    <div class="alphabet" id="alphabet"></div>
    <div class="card" id="dictList"></div>
  `;
  const alphaDiv = document.getElementById('alphabet');
  letters.forEach(l=>{
    const b = document.createElement('button');
    b.className = 'letter-btn' + (l===dictLetter ? ' active' : '');
    b.textContent = l==='ALL' ? '☰' : l;
    b.addEventListener('click', ()=>{ dictLetter = l; renderDictionary(); });
    alphaDiv.appendChild(b);
  });

  document.getElementById('dictSearch').addEventListener('input', (e)=>{
    dictSearch = e.target.value.toLowerCase();
    renderDictList();
  });
  document.getElementById('onlyUnknown').addEventListener('change', (e)=>{
    dictOnlyUnknown = e.target.checked;
    renderDictList();
  });

  renderDictList();
}

function renderDictList(){
  let words = filterByLevel(DICTIONARY);
  if(dictLetter !== 'ALL') words = words.filter(w=> w.en[0].toUpperCase() === dictLetter);
  if(dictSearch) words = words.filter(w=> w.en.toLowerCase().includes(dictSearch) || w.ru.toLowerCase().includes(dictSearch));
  if(dictOnlyUnknown) words = words.filter(w=> !isWordKnown(w.en));

  const list = document.getElementById('dictList');
  list.innerHTML = '';
  if(words.length===0){
    list.innerHTML = '<p class="muted">Ничего не найдено.</p>';
    return;
  }
  words.forEach(w=>{
    const row = document.createElement('div');
    row.className = 'dict-item';
    const known = isWordKnown(w.en);
    row.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="en">${w.en}</span><span class="transcr">${w.transcr}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="tr-text hidden">${w.ru}</span>
        <button class="reveal-btn">Показать перевод</button>
        <button class="known-btn ${known?'known':''}" title="Отметить как выученное">${known?'✓ Выучено':'Выучить'}</button>
      </div>
    `;
    const speakBtn = speakerBtn(w.en,'sm');
    row.firstElementChild.appendChild(speakBtn);
    const trSpan = row.querySelector('.tr-text');
    const btn = row.querySelector('.reveal-btn');
    btn.addEventListener('click', ()=>{
      trSpan.classList.toggle('hidden');
      btn.textContent = trSpan.classList.contains('hidden') ? 'Показать перевод' : 'Скрыть';
    });
    const knownBtn = row.querySelector('.known-btn');
    knownBtn.addEventListener('click', ()=>{
      toggleKnownWord(w.en);
      renderDictList();
    });
    list.appendChild(row);
  });
}

/* ==================== ПРАКТИКА ==================== */
function renderPractice(){
  app.innerHTML = `
    <h1>Практика</h1>
    <p class="muted">Выбери тип упражнения:</p>
    <div class="grid">
      <div class="tile" id="goQuiz"><h3>📝 Тест (грамматика)</h3><p class="muted">Выбери правильный вариант ответа.</p></div>
      <div class="tile" id="goMatch"><h3>🔗 Сопоставление слов</h3><p class="muted">Соедини английское слово с переводом.</p></div>
    </div>
  `;
  document.getElementById('goQuiz').addEventListener('click', renderQuiz);
  document.getElementById('goMatch').addEventListener('click', renderMatching);
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

/* ---- Тест (multiple choice) ---- */
function renderQuiz(){
  const pool = shuffle(filterByLevel(QUIZ_BANK)).slice(0,8);
  let score = 0;
  let answered = 0;

  app.innerHTML = '';
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.textContent = '← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className = 'card';
  header.innerHTML = `<h2>Тест по грамматике</h2><p class="muted">Вопросов: ${pool.length}. Нажми на вариант ответа.</p>`;
  app.appendChild(header);

  if(pool.length===0){
    const w = document.createElement('p');
    w.className='muted';
    w.textContent='Для выбранного уровня пока нет вопросов.';
    app.appendChild(w);
    return;
  }

  pool.forEach((q,idx)=>{
    const card = document.createElement('div');
    card.className = 'card q-card';
    card.innerHTML = `<span class="tag ${q.level==='B2'?'b2':''}">${q.level} · ${q.topic}</span><h3>${idx+1}. ${q.q}</h3>`;
    const optWrap = document.createElement('div');
    optWrap.className = 'options';
    q.options.forEach((opt,oi)=>{
      const o = document.createElement('div');
      o.className = 'option';
      o.textContent = opt;
      o.addEventListener('click', ()=>{
        if(o.classList.contains('disabled')) return;
        optWrap.querySelectorAll('.option').forEach(el=>el.classList.add('disabled'));
        if(oi === q.correct){
          o.classList.add('correct');
          score++;
        } else {
          o.classList.add('wrong');
          optWrap.children[q.correct].classList.add('correct');
        }
        answered++;
        if(answered === pool.length) showQuizResult(score, pool.length);
      });
      optWrap.appendChild(o);
    });
    card.appendChild(optWrap);
    app.appendChild(card);
  });

  const resultDiv = document.createElement('div');
  resultDiv.id = 'quizResult';
  app.appendChild(resultDiv);
}

function showQuizResult(score, total){
  addQuizResult(score, total);
  const div = document.getElementById('quizResult');
  const pct = Math.round(score/total*100);
  const cls = pct>=70 ? 'good' : 'bad';
  div.innerHTML = `<div class="result-banner ${cls}">Результат: ${score} из ${total} (${pct}%)</div>
    <button class="btn" id="retryQuiz">Пройти ещё раз</button>`;
  document.getElementById('retryQuiz').addEventListener('click', renderQuiz);
}

/* ---- Сопоставление (matching) ---- */
function renderMatching(){
  const words = shuffle(filterByLevel(DICTIONARY)).slice(0,6);

  app.innerHTML = '';
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.textContent = '← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className = 'card';
  header.innerHTML = `<h2>Сопоставь слово и перевод</h2><p class="muted">Нажми на английское слово, затем на нужный перевод.</p>`;
  app.appendChild(header);

  if(words.length===0){
    const w = document.createElement('p');
    w.className='muted';
    w.textContent='Для выбранного уровня пока нет слов.';
    app.appendChild(w);
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';
  const grid = document.createElement('div');
  grid.className = 'match-grid';
  const leftCol = document.createElement('div');
  leftCol.className = 'match-col';
  const rightCol = document.createElement('div');
  rightCol.className = 'match-col';

  const rightShuffled = shuffle(words);
  let selectedLeft = null;
  let matchedCount = 0;

  words.forEach(w=>{
    const item = document.createElement('div');
    item.className = 'match-item';
    item.textContent = w.en;
    item.dataset.en = w.en;
    item.addEventListener('click', ()=>{
      if(item.classList.contains('matched')) return;
      leftCol.querySelectorAll('.match-item').forEach(el=>el.classList.remove('selected'));
      item.classList.add('selected');
      selectedLeft = item;
    });
    leftCol.appendChild(item);
  });

  rightShuffled.forEach(w=>{
    const item = document.createElement('div');
    item.className = 'match-item';
    item.textContent = w.ru;
    item.dataset.en = w.en;
    item.addEventListener('click', ()=>{
      if(item.classList.contains('matched') || !selectedLeft) return;
      if(item.dataset.en === selectedLeft.dataset.en){
        item.classList.add('matched');
        selectedLeft.classList.add('matched');
        selectedLeft.classList.remove('selected');
        matchedCount++;
        selectedLeft = null;
        if(matchedCount === words.length) showMatchResult();
      } else {
        item.classList.add('wrong-flash');
        selectedLeft.classList.add('wrong-flash');
        setTimeout(()=>{
          item.classList.remove('wrong-flash');
          selectedLeft && selectedLeft.classList.remove('wrong-flash');
        },500);
      }
    });
    rightCol.appendChild(item);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  card.appendChild(grid);
  app.appendChild(card);

  const resultDiv = document.createElement('div');
  resultDiv.id = 'matchResult';
  app.appendChild(resultDiv);

  function showMatchResult(){
    const div = document.getElementById('matchResult');
    div.innerHTML = `<div class="result-banner good">Отлично! Все слова сопоставлены верно 🎉</div>
      <button class="btn" id="retryMatch">Ещё раз с новыми словами</button>`;
    document.getElementById('retryMatch').addEventListener('click', renderMatching);
  }
}

/* ==================== ДИАЛОГИ ==================== */
function renderDialoguesTopics(){
  app.innerHTML = `
    <h1>Диалоги</h1>
    <p class="muted">Выбери тему, чтобы попрактиковать реальные разговоры на английском.</p>
    <div class="grid" id="topicGrid"></div>
  `;
  const grid = document.getElementById('topicGrid');
  DIALOGUE_TOPICS.forEach(t=>{
    const count = DIALOGUES.filter(d=>d.topicId===t.id).length;
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `<h3>${t.icon} ${t.label}</h3><p class="muted">${count} диалог(а)</p>`;
    tile.addEventListener('click', ()=> renderDialoguesList(t.id));
    grid.appendChild(tile);
  });
}

function renderDialoguesList(topicId){
  const topic = DIALOGUE_TOPICS.find(t=>t.id===topicId);
  const dialogues = filterByLevel(DIALOGUES.filter(d=>d.topicId===topicId));

  app.innerHTML = '';
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.textContent = '← Назад к темам';
  back.addEventListener('click', renderDialoguesTopics);
  app.appendChild(back);

  const h = document.createElement('h1');
  h.textContent = topic.icon + ' ' + topic.label;
  app.appendChild(h);

  if(dialogues.length===0){
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = 'Для выбранного уровня в этой теме пока нет диалогов.';
    app.appendChild(p);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';
  dialogues.forEach(d=>{
    const done = PROGRESS.dialoguesDone.includes(d.id);
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `<span class="tag ${d.level==='B2'?'b2':''}">${d.level}</span> ${done?'<span class="check">✓</span>':''}<h3>${d.title}</h3>`;
    tile.addEventListener('click', ()=> renderDialogueDetail(d.id));
    grid.appendChild(tile);
  });
  app.appendChild(grid);
}

function renderDialogueDetail(dialogueId){
  const d = DIALOGUES.find(x=>x.id===dialogueId);
  app.innerHTML = '';
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.textContent = '← Назад к диалогам';
  back.addEventListener('click', ()=> renderDialoguesList(d.topicId));
  app.appendChild(back);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<span class="tag ${d.level==='B2'?'b2':''}">${d.level}</span><h2>${d.title}</h2><p class="muted">Клик по слову — перевод. 🔊 — прослушать фразу целиком.</p>`;

  const chat = document.createElement('div');
  chat.className = 'chat';
  d.lines.forEach((line, idx)=>{
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + (line.speaker==='A' ? 'left' : 'right');
    const label = document.createElement('div');
    label.className = 'bubble-label';
    label.textContent = line.speaker==='A' ? '👤 Собеседник A' : '🙂 Собеседник B';
    bubble.appendChild(label);

    if(d.quiz && idx===d.quiz.blankIndex){
      bubble.appendChild(renderBlankLine(d, bubble));
    } else {
      bubble.appendChild(renderExample(line.text));
    }
    chat.appendChild(bubble);
  });
  card.appendChild(chat);
  app.appendChild(card);

  markDialogueDone(d.id);
}

function renderBlankLine(d, bubbleEl){
  const wrap = document.createElement('div');
  wrap.className = 'blank-quiz';
  wrap.innerHTML = `<p class="muted" style="margin:4px 0 8px;">Какая реплика подходит лучше? (мини-тест)</p>`;
  const opts = document.createElement('div');
  opts.className = 'options';
  const optionOrder = shuffle(d.quiz.options.map((text,i)=>({text,i})));
  optionOrder.forEach(({text,i})=>{
    const o = document.createElement('div');
    o.className = 'option';
    o.textContent = text;
    o.addEventListener('click', ()=>{
      if(o.classList.contains('disabled')) return;
      opts.querySelectorAll('.option').forEach(el=>el.classList.add('disabled'));
      if(i===d.quiz.correct){
        o.classList.add('correct');
      } else {
        o.classList.add('wrong');
        [...opts.children].find((el,ci)=> optionOrder[ci].i===d.quiz.correct)?.classList.add('correct');
      }
    });
    opts.appendChild(o);
  });
  wrap.appendChild(opts);
  return wrap;
}

/* ==================== ИИ-ПОМОЩНИК ==================== */
function renderAI(){
  const savedKey = localStorage.getItem('ai_api_key') || '';
  const savedEndpoint = localStorage.getItem('ai_endpoint') || 'https://api.openai.com/v1/chat/completions';

  app.innerHTML = `
    <h1>ИИ-помощник</h1>
    <div class="warn">
      Сайт статический (GitHub Pages), поэтому у него нет своего сервера и своего секретного ИИ-ключа.
      Чтобы ИИ-помощник работал, впиши <b>свой</b> API-ключ (например, от OpenAI) — он хранится только в
      твоём браузере (localStorage) и никуда, кроме выбранного API, не отправляется.
      Если ключа нет — можно пользоваться теорией, словарём, диалогами и тестами без ИИ.
    </div>
    <div class="card ai-box">
      <label class="muted">Endpoint API (по умолчанию OpenAI chat/completions):</label>
      <input type="text" id="aiEndpoint" value="${savedEndpoint}">
      <label class="muted">Твой API-ключ:</label>
      <input type="password" id="aiKey" value="${savedKey}" placeholder="sk-...">
      <label class="muted">Вопрос (о грамматике, слове, переводе и т.д.):</label>
      <textarea id="aiQuestion" rows="3" placeholder="Например: объясни разницу между Present Perfect и Past Simple с примерами"></textarea>
      <button class="btn" id="aiSend">Спросить</button>
      <div class="ai-log" id="aiLog">Ответ появится здесь...</div>
    </div>
  `;

  document.getElementById('aiSend').addEventListener('click', async ()=>{
    const endpoint = document.getElementById('aiEndpoint').value.trim();
    const key = document.getElementById('aiKey').value.trim();
    const question = document.getElementById('aiQuestion').value.trim();
    const log = document.getElementById('aiLog');

    if(!key){ log.textContent = 'Введи API-ключ, чтобы использовать ИИ-помощника.'; return; }
    if(!question){ log.textContent = 'Напиши вопрос.'; return; }

    localStorage.setItem('ai_api_key', key);
    localStorage.setItem('ai_endpoint', endpoint);

    log.textContent = 'Думаю...';

    try{
      const res = await fetch(endpoint, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify({
          model:'gpt-4o-mini',
          messages:[
            {role:'system', content:'Ты — преподаватель английского языка для русскоговорящих учеников уровня B1-B2. Объясняй понятно, кратко, с примерами и переводом на русский.'},
            {role:'user', content:question}
          ]
        })
      });
      if(!res.ok){
        const errText = await res.text();
        log.textContent = 'Ошибка запроса (' + res.status + '). Проверь ключ/эндпоинт.\n' + errText.slice(0,300);
        return;
      }
      const data = await res.json();
      const answer = data.choices?.[0]?.message?.content || JSON.stringify(data);
      log.textContent = answer;
    } catch(err){
      log.textContent = 'Не удалось выполнить запрос. Возможно, сайт с GitHub Pages блокируется политикой CORS этого API, или проблема с сетью.\n' + err.message;
    }
  });
}

/* ==================== ГЛАВНЫЙ РЕНДЕР ==================== */
function render(){
  if(currentPage==='home') renderHome();
  else if(currentPage==='theory') renderTheoryList();
  else if(currentPage==='dictionary') renderDictionary();
  else if(currentPage==='practice') renderPractice();
  else if(currentPage==='dialogues') renderDialoguesTopics();
  else if(currentPage==='ai') renderAI();
}

render();

/* ==================== СИСТЕМА ПОДСКАЗОК (правило под каждое задание) ====================
   hint = { title: 'Название правила', rule: 'Объяснение', formula: 'опц. формула', example: опц. ex([...]) } */
function renderHint(hint){
  const wrap = document.createElement('div');
  wrap.className = 'hint-wrap';
  const btn = document.createElement('button');
  btn.className = 'hint-btn';
  btn.innerHTML = '💡 Показать правило';
  const box = document.createElement('div');
  box.className = 'hint-box hidden';
  box.innerHTML = `<h4>${hint.title}</h4><p>${hint.rule}</p>` + (hint.formula ? `<div class="formula">${hint.formula}</div>` : '');
  if(hint.example){ box.appendChild(renderExample(hint.example)); }
  btn.addEventListener('click', ()=>{
    box.classList.toggle('hidden');
    btn.innerHTML = box.classList.contains('hidden') ? '💡 Показать правило' : '🔽 Скрыть правило';
  });
  wrap.appendChild(btn);
  wrap.appendChild(box);
  return wrap;
}

/* простая проверка близости текста (без учёта регистра/пунктуации) */
function normalizeText(s){
  return s.toLowerCase().replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();
}
function compareAnswers(userText, correctText){
  const u = normalizeText(userText);
  const c = normalizeText(correctText);
  if(u === c) return 'exact';
  const uWords = u.split(' ');
  const cWords = c.split(' ');
  const common = uWords.filter(w=>cWords.includes(w)).length;
  const ratio = common / cWords.length;
  if(ratio >= 0.8) return 'close';
  return 'far';
}

/* ==================== ЗАДАНИЯ: ПЕРЕВОД RU → EN ==================== */
const TRANSLATION_TASKS = [
{ru:'Я живу в этом городе уже пять лет.', en:'I have lived in this city for five years.', level:'B2',
  hint:{title:'Present Perfect + for', rule:'Действие началось в прошлом и продолжается сейчас — используем Present Perfect. "For" + период времени (five years), "since" + точка отсчёта (2019).', formula:'have/has + V3 ... for + период'}},
{ru:'Она обычно встаёт в семь утра.', en:'She usually gets up at seven in the morning.', level:'B1',
  hint:{title:'Present Simple', rule:'Регулярное действие/привычка — Present Simple. Не забываем окончание -s у глагола с she/he/it.', formula:'She/He/It + V-s'}},
{ru:'Мы вчера смотрели интересный фильм.', en:'We watched an interesting film yesterday.', level:'B1',
  hint:{title:'Past Simple', rule:'Завершённое действие с указанием времени в прошлом (yesterday) — Past Simple.', formula:'подлежащее + V2 (Past)'}},
{ru:'Пока я готовил ужин, зазвонил телефон.', en:'While I was cooking dinner, the phone rang.', level:'B2',
  hint:{title:'Past Continuous + Past Simple', rule:'Длительное фоновое действие (готовил) — Past Continuous, а короткое действие, которое его прервало (зазвонил) — Past Simple.', formula:'While + was/were + V-ing, ... + V2'}},
{ru:'Если завтра будет солнечно, мы пойдём на пляж.', en:'If it is sunny tomorrow, we will go to the beach.', level:'B2',
  hint:{title:'First Conditional', rule:'Реальное условие в будущем: в If-части — Present Simple (НЕ will!), в главной части — will + V.', formula:'If + Present Simple, ... will + V(base)'}},
{ru:'Если бы у меня было больше времени, я бы путешествовал чаще.', en:'If I had more time, I would travel more often.', level:'B2',
  hint:{title:'Second Conditional', rule:'Гипотетическая, нереальная ситуация в настоящем — If + Past Simple, would + V(base).', formula:'If + Past Simple, ... would + V(base)'}},
{ru:'Этот дом был построен в 1990 году.', en:'This house was built in 1990.', level:'B2',
  hint:{title:'Passive Voice', rule:'Важен не тот, кто строил, а сам дом (объект действия) — используем страдательный залог.', formula:'подлежащее + was/were + V3'}},
{ru:'Она сказала, что устала.', en:'She said that she was tired.', level:'B2',
  hint:{title:'Reported Speech', rule:'При передаче чужих слов время "сдвигается назад": is → was.', formula:'said that + подлежащее + V(прошедшее)'}},
{ru:'Тебе следует пить больше воды.', en:'You should drink more water.', level:'B1',
  hint:{title:'Modal verb should', rule:'Совет — should + инфинитив без to.', formula:'should + V(base)'}},
{ru:'Я никогда не был в Париже.', en:'I have never been to Paris.', level:'B2',
  hint:{title:'Present Perfect (опыт)', rule:'Жизненный опыт без указания конкретного времени — Present Perfect. Обратите внимание на "been to" (не "was").', formula:'have/has + never + V3'}},
{ru:'У меня не так много времени.', en:'I don\u2019t have much time.', level:'B1',
  hint:{title:'much vs many', rule:'"Time" — неисчисляемое существительное, поэтому используем "much", а не "many".', formula:'much + неисчисляемое сущ.'}},
{ru:'Мне тридцать лет.', en:'I am thirty years old.', level:'B1',
  hint:{title:'Возраст: to be, а не to have!', rule:'В русском "мне ... лет" — калька заставляет писать "I have", но по-английски возраст выражается через глагол "to be": I am ... years old.', formula:'подлежащее + am/is/are + число + years old'}},
{ru:'Она интересуется искусством.', en:'She is interested in art.', level:'B1',
  hint:{title:'Устойчивый предлог: interested in', rule:'"Interested" всегда идёт с предлогом "in", не "about" и не "of".', formula:'be interested in + noun'}},
{ru:'Мы уже закончили проект.', en:'We have already finished the project.', level:'B1',
  hint:{title:'Present Perfect + already', rule:'Результат важен сейчас — Present Perfect. "Already" обычно ставится перед основным глаголом.', formula:'have/has + already + V3'}},
{ru:'Он выглядит усталым сегодня.', en:'He looks tired today.', level:'B1',
  hint:{title:'look + прилагательное', rule:'После "look" (выглядеть) идёт прилагательное, а не наречие: look tired, не look tiredly.', formula:'look/feel/seem + adjective'}}
];

/* ==================== ЗАДАНИЯ: ТРАНСФОРМАЦИЯ ПРЕДЛОЖЕНИЙ ==================== */
const TRANSFORM_TASKS = [
{instruction:'Переделай в пассивный залог:', original:'They built this house in 1990.', answer:'This house was built in 1990.', level:'B2',
  hint:{title:'Passive Voice', rule:'Объект действия (this house) становится подлежащим, глагол — was/were + V3.', formula:'Object + was/were + V3 (+ by + Subject)'}},
{instruction:'Переделай в косвенную речь: He said, "I am tired."', original:'He said, "I am tired."', answer:'He said that he was tired.', level:'B2',
  hint:{title:'Reported Speech', rule:'am → was, "I" → "he" (в зависимости от контекста).', formula:'said (that) + подлежащее + V(прошедшее)'}},
{instruction:'Соедини два предложения с помощью "although":', original:'It was raining. We went for a walk.', answer:'Although it was raining, we went for a walk.', level:'B2',
  hint:{title:'although (уступка)', rule:'"Although" стоит перед предложением, которое противоречит второму, и объединяет их в одно.', formula:'Although + предложение 1, предложение 2'}},
{instruction:'Переделай в Present Perfect (используй "already"):', original:'I finish my homework. (already, now)', answer:'I have already finished my homework.', level:'B1',
  hint:{title:'Present Perfect', rule:'Действие завершено и важно сейчас.', formula:'have/has + already + V3'}},
{instruction:'Задай вопрос к предложению:', original:'She works in a bank.', answer:'Does she work in a bank?', level:'B1',
  hint:{title:'Вопрос в Present Simple', rule:'Нужен вспомогательный глагол Does (т.к. she), а основной глагол возвращается в базовую форму (works → work).', formula:'Do/Does + подлежащее + V(base)?'}},
{instruction:'Переделай в сравнительную степень:', original:'This bag is cheap. That bag is expensive.', answer:'This bag is cheaper than that bag.', level:'B1',
  hint:{title:'Comparatives', rule:'Короткое прилагательное cheap → cheaper + than.', formula:'adjective + -er + than'}},
{instruction:'Переделай во второе условное:', original:'I don\u2019t have money, so I don\u2019t travel.', answer:'If I had money, I would travel.', level:'B2',
  hint:{title:'Second Conditional', rule:'Гипотетическая ситуация в настоящем: If + Past Simple, would + V.', formula:'If + Past Simple, ... would + V(base)'}},
{instruction:'Соедини с помощью "despite":', original:'The traffic was bad. We arrived on time.', answer:'Despite the bad traffic, we arrived on time.', level:'B2',
  hint:{title:'despite + noun', rule:'После "despite" идёт существительное или V-ing, а не целое предложение (в отличие от "although").', formula:'Despite + noun/V-ing, ...'}},
{instruction:'Переделай в Past Continuous + Past Simple:', original:'I was reading a book. The phone rang. (объедини)', answer:'I was reading a book when the phone rang.', level:'B1',
  hint:{title:'Past Continuous + when + Past Simple', rule:'Длительное фоновое действие + "when" + короткое прерывающее действие.', formula:'was/were + V-ing + when + V2'}},
{instruction:'Переделай в третье условное:', original:'She didn\u2019t study, so she failed the exam.', answer:'If she had studied, she wouldn\u2019t have failed the exam.', level:'B2',
  hint:{title:'Third Conditional', rule:'Нереальное прошлое: If + Past Perfect, would have + V3.', formula:'If + had + V3, ... would have + V3'}},
{instruction:'Переделай в пассив:', original:'Someone stole my bike yesterday.', answer:'My bike was stolen yesterday.', level:'B2',
  hint:{title:'Passive Voice', rule:'Кто украл — неизвестно/неважно, поэтому объект (bike) выходит на первое место.', formula:'Object + was/were + V3'}},
{instruction:'Добавь разделительный вопрос (question tag):', original:'You live here.', answer:'You live here, don\u2019t you?', level:'B2',
  hint:{title:'Question Tags', rule:'Утвердительное предложение → отрицательный хвостик.', formula:'..., don\u2019t/doesn\u2019t/isn\u2019t + подлежащее?'}},
{instruction:'Переделай в "used to":', original:'I played football every weekend when I was young.', answer:'I used to play football every weekend.', level:'B2',
  hint:{title:'used to', rule:'Повторяющееся действие в прошлом, которого больше нет.', formula:'used to + V(base)'}},
{instruction:'Переделай с "enjoy" + герундий:', original:'I like to read books. (перепиши с enjoy)', answer:'I enjoy reading books.', level:'B1',
  hint:{title:'enjoy + V-ing', rule:'После "enjoy" всегда герундий (V-ing), никогда "to V".', formula:'enjoy + V-ing'}},
{instruction:'Переделай в Present Perfect Continuous:', original:'I started learning English three years ago and I am still learning.', answer:'I have been learning English for three years.', level:'B2',
  hint:{title:'Present Perfect Continuous', rule:'Подчёркивает длительность действия, которое началось в прошлом и продолжается сейчас.', formula:'have/has + been + V-ing + for/since'}}
];

/* ==================== ЗАДАНИЯ: СОБЕРИ ПРЕДЛОЖЕНИЕ ==================== */
const SCRAMBLE_TASKS = [
{words:['She','has','never','been','to','Paris','.'], level:'B2', hint:{title:'Present Perfect', rule:'Порядок: подлежащее + has/have + never + V3 + дополнение.', formula:'have/has + never + V3'}},
{words:['If','it','rains',',','I','will','stay','home','.'], level:'B2', hint:{title:'First Conditional', rule:'If-часть в Present Simple, главная часть с will.', formula:'If + Present Simple, will + V'}},
{words:['I','have','been','studying','English','for','three','years','.'], level:'B2', hint:{title:'Present Perfect Continuous', rule:'have + been + V-ing + for + период.', formula:'have been + V-ing'}},
{words:['The','letter','was','written','by','Anna','.'], level:'B2', hint:{title:'Passive Voice', rule:'Подлежащее (letter) + was/were + V3 + by + исполнитель.', formula:'Subject + was/were + V3 + by'}},
{words:['Could','you','tell','me','the','way','to','the','station','?'], level:'B1', hint:{title:'Вежливая просьба', rule:'"Could you..." — вежливая форма вопроса-просьбы.', formula:'Could you + V(base) ... ?'}},
{words:['Although','it','was','cold',',','we','went','outside','.'], level:'B2', hint:{title:'although', rule:'"Although" ставится перед первым предложением уступки, за ним запятая и главное предложение.', formula:'Although + предложение 1, предложение 2'}},
{words:['You','should','drink','more','water','.'], level:'B1', hint:{title:'Modal should', rule:'should + V(base), без "to".', formula:'should + V(base)'}},
{words:['This','is','the','most','interesting','book','I','have','ever','read','.'], level:'B2', hint:{title:'Превосходная степень + Present Perfect', rule:'the most + long adjective, плюс относительное придаточное "I have ever read".', formula:'the most + adjective + noun + (that) + Present Perfect'}},
{words:['If','I','had','more','time',',','I','would','travel','more','.'], level:'B2', hint:{title:'Second Conditional', rule:'If + Past Simple, would + V(base).', formula:'If + Past Simple, would + V'}},
{words:['She','said','that','she','was','tired','.'], level:'B2', hint:{title:'Reported Speech', rule:'Время сдвигается назад: am/is → was.', formula:'said that + подлежащее + V(прошедшее)'}},
{words:['We','are','going','to','visit','our','grandparents','next','week','.'], level:'B1', hint:{title:'be going to', rule:'Заранее запланированное действие в будущем.', formula:'am/is/are + going to + V(base)'}},
{words:['He','used','to','play','football','every','weekend','.'], level:'B2', hint:{title:'used to', rule:'Повторяющееся действие в прошлом.', formula:'used to + V(base)'}},
{words:['Do','you','want','to','go','to','the','cinema','?'], level:'B1', hint:{title:'Present Simple: вопрос', rule:'Do + подлежащее + V(base) в начале вопроса.', formula:'Do/Does + подлежащее + V(base) ... ?'}},
{words:['I','don\u2019t','have','much','time','today','.'], level:'B1', hint:{title:'much', rule:'"Time" — неисчисляемое, поэтому "much", не "many".', formula:'much + неисчисляемое сущ.'}},
{words:['Despite','the','rain',',','we','enjoyed','the','trip','.'], level:'B2', hint:{title:'despite + noun', rule:'После "despite" — существительное (the rain), без "that" и без целого предложения.', formula:'Despite + noun, ...'}}
];

/* ============================================================
   БЛОК 2: активная практика (перевод, трансформация, сборка,
   поиск ошибок), типичные ошибки, идиомы, практические шаблоны
   ============================================================ */

/* ---------- Доп. правила-подсказки, которых нет в GRAMMAR ---------- */
const EXTRA_HINTS = {
  'word-order':{
    title:'Порядок слов в английском предложении',
    text:'В отличие от русского, в английском порядок слов почти фиксированный: Подлежащее + Сказуемое + Дополнение (SVO). Наречия частоты (always, never, often, usually) стоят перед смысловым глаголом, но после глагола to be. В специальных вопросах вопросительное слово всегда идёт первым, затем вспомогательный глагол, затем подлежащее.',
    formula:'Subject + (наречие) + Verb + Object · Question word + auxiliary + Subject + Verb',
    example: ex([['She','она'],['always','всегда'],['drinks','пьёт'],['coffee','кофе'],['in','по'],['the','—'],['morning','утрам'],['.','']])
  },
  'state-verbs':{
    title:'Глаголы состояния (State Verbs)',
    text:'Некоторые глаголы описывают состояние, а не действие (know, understand, like, love, want, believe, need) — они почти никогда не используются в форме Continuous (-ing), даже если действие происходит прямо сейчас.',
    formula:'I understand (не "I am understanding") · She likes it (не "is liking")',
    example: ex([['I','я'],['understand','понимаю'],['the','—'],['rule','правило'],['now','сейчас'],['.','']])
  },
  'since-for':{
    title:'since vs for',
    text:'"For" используется с периодом времени (сколько长ится действие): for five years, for a week. "Since" используется с точкой отсчёта во времени (с какого момента): since 2020, since Monday. Оба часто используются с Present Perfect.',
    formula:'for + период (for 5 years) · since + точка отсчёта (since 2020)',
    example: ex([['I','я'],['have','—'],['lived','жил'],['here','здесь'],['since','с'],['2020','2020 года'],['.','']])
  },
  'false-friends':{
    title:'"Ложные друзья переводчика" и типичные кальки',
    text:'Некоторые английские слова похожи на русские, но означают совсем другое (magazine — журнал, а не магазин; actually — на самом деле, а не актуально). Также многие конструкции нельзя переводить дословно с русского: "жениться на ком-то" — не "married with", а "married to".',
    formula:'be married to smb (не with) · actually = на самом деле · magazine = журнал',
    example: ex([['She','она'],['is','—'],['married','замужем'],['to','за'],['a','—'],['doctor','врачом'],['.','']])
  }
};

function getHintData(key){
  const g = GRAMMAR.find(t=>t.id===key);
  if(g) return {title:g.title, text:g.text, formula:g.formula, example:g.examples[0]};
  return EXTRA_HINTS[key] || null;
}

function attachHint(container, hintKey){
  if(!hintKey) return;
  const data = getHintData(hintKey);
  if(!data) return;
  const btn = document.createElement('button');
  btn.className = 'btn secondary hint-btn';
  btn.textContent = '💡 Показать правило';
  const panel = document.createElement('div');
  panel.className = 'hint-panel hidden';
  panel.innerHTML = `<h4>${data.title}</h4><p>${data.text}</p>${data.formula ? '<div class="formula">'+data.formula+'</div>' : ''}`;
  if(VISUALS[key]){
    const v = document.createElement('div');
    v.className = 'visual-box';
    v.style.marginTop = '10px';
    v.innerHTML = VISUALS[key];
    panel.appendChild(v);
  }
  if(data.example) panel.appendChild(renderExample(data.example));
  btn.addEventListener('click', ()=>{
    panel.classList.toggle('hidden');
    btn.textContent = panel.classList.contains('hidden') ? '💡 Показать правило' : '🙈 Скрыть правило';
  });
  container.appendChild(btn);
  container.appendChild(panel);
}

function normalizeAnswer(s){
  return s.toLowerCase().trim()
    .replace(/[.,!?;:]+$/,'')
    .replace(/['’]/g,"'")
    .replace(/\s+/g,' ');
}

/* ==================== ПЕРЕВОД RU → EN ==================== */
const TRANSLATE_BANK = [
{id:'t1', level:'B1', ru:'Я делаю домашнее задание каждый день.', answers:['I do my homework every day.'], hintKey:'present-simple'},
{id:'t2', level:'B1', ru:'Сейчас идёт дождь.', answers:['It is raining now.',"It's raining now."], hintKey:'present-continuous'},
{id:'t3', level:'B1', ru:'Мы посетили Лондон в прошлом году.', answers:['We visited London last year.'], hintKey:'past-simple'},
{id:'t4', level:'B1', ru:'Ты должен пить больше воды.', answers:['You should drink more water.'], hintKey:'modals'},
{id:'t5', level:'B1', ru:'Этот дом дешевле, чем тот.', answers:['This house is cheaper than that one.','This house is cheaper than that house.'], hintKey:'comparatives'},
{id:'t6', level:'B1', ru:'У меня не так много времени.', answers:["I don't have much time.",'I do not have much time.'], hintKey:'countable-uncountable'},
{id:'t7', level:'B1', ru:'Она любит читать книги.', answers:['She enjoys reading books.','She likes reading books.'], hintKey:'gerund-infinitive'},
{id:'t8', level:'B2', ru:'Я живу в этом городе уже пять лет.', answers:['I have lived in this city for five years.'], hintKey:'present-perfect'},
{id:'t9', level:'B2', ru:'Она никогда не была в Париже.', answers:['She has never been to Paris.'], hintKey:'present-perfect'},
{id:'t10', level:'B2', ru:'Если бы у меня было больше времени, я бы путешествовал больше.', answers:['If I had more time, I would travel more.'], hintKey:'conditional2'},
{id:'t11', level:'B2', ru:'Письмо было написано Анной.', answers:['The letter was written by Anna.'], hintKey:'passive'},
{id:'t12', level:'B2', ru:'Он сказал, что устал.', answers:['He said that he was tired.','He said he was tired.'], hintKey:'reported-speech'},
{id:'t13', level:'B2', ru:'Когда я пришёл, она уже ушла.', answers:['When I arrived, she had already left.'], hintKey:'past-perfect'},
{id:'t14', level:'B2', ru:'Несмотря на дождь, мы пошли гулять.', answers:['Despite the rain, we went for a walk.'], hintKey:'linking-words'},
{id:'t15', level:'B2', ru:'Ты живёшь здесь, не так ли?', answers:["You live here, don't you?"], hintKey:'question-tags'}
];

function renderTranslatePractice(){
  const pool = shuffle(filterByLevel(TRANSLATE_BANK)).slice(0,6);
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className='card';
  header.innerHTML = `<h2>Перевод RU → EN</h2><p class="muted">Переведи предложение сам и нажми «Проверить». Если не знаешь правило — открой подсказку.</p>`;
  app.appendChild(header);

  if(pool.length===0){
    app.innerHTML += '<p class="muted">Для выбранного уровня пока нет заданий.</p>';
    return;
  }

  pool.forEach((item,idx)=>{
    const card = document.createElement('div');
    card.className='card q-card';
    card.innerHTML = `<span class="tag ${item.level==='B2'?'b2':''}">${item.level}</span><h3>${idx+1}. ${item.ru}</h3>`;
    const input = document.createElement('input');
    input.type='text'; input.className='answer-input'; input.placeholder='Напиши перевод на английском...';
    const btnRow = document.createElement('div');
    btnRow.className='btn-row';
    const checkBtn = document.createElement('button');
    checkBtn.className='btn'; checkBtn.textContent='Проверить';
    const feedback = document.createElement('div');
    feedback.className='feedback';

    checkBtn.addEventListener('click', ()=>{
      const user = normalizeAnswer(input.value);
      const ok = item.answers.some(a=> normalizeAnswer(a)===user);
      feedback.className = 'feedback ' + (ok?'good':'bad');
      feedback.innerHTML = ok
        ? '✅ Верно!'
        : '❌ Не совсем. Правильный вариант: <b>'+item.answers[0]+'</b>';
    });

    btnRow.appendChild(checkBtn);
    attachHint(btnRow, item.hintKey);
    card.appendChild(input);
    card.appendChild(btnRow);
    card.appendChild(feedback);
    app.appendChild(card);
  });
}

/* ==================== ТРАНСФОРМАЦИЯ ПРЕДЛОЖЕНИЙ ==================== */
const TRANSFORM_BANK = [
{id:'x1', level:'B2', instruction:'Сделай предложение пассивным (Passive Voice):', original:'They built this house in 1990.', answer:'This house was built in 1990.', hintKey:'passive'},
{id:'x2', level:'B2', instruction:'Сделай предложение пассивным:', original:'Someone stole my bike.', answer:'My bike was stolen.', hintKey:'passive'},
{id:'x3', level:'B2', instruction:'Переведи в косвенную речь: He said, "I am busy."', original:'He said, "I am busy."', answer:'He said that he was busy.', hintKey:'reported-speech'},
{id:'x4', level:'B2', instruction:'Переведи в косвенную речь: She said, "I will call you."', original:'She said, "I will call you."', answer:'She said that she would call me.', hintKey:'reported-speech'},
{id:'x5', level:'B1', instruction:'Поставь в Present Perfect (действие важно сейчас):', original:'I / finish / my work (already)', answer:'I have already finished my work.', hintKey:'present-perfect'},
{id:'x6', level:'B2', instruction:'Соедини два предложения через "although":', original:'It was raining. We went for a walk.', answer:'Although it was raining, we went for a walk.', hintKey:'linking-words'},
{id:'x7', level:'B2', instruction:'Соедини два предложения через "despite" (+ V-ing):', original:'He is rich. He is not happy.', answer:'Despite being rich, he is not happy.', hintKey:'linking-words'},
{id:'x8', level:'B2', instruction:'Сделай Second Conditional (нереальная ситуация):', original:'I don\u2019t have money. I don\u2019t buy a car.', answer:'If I had money, I would buy a car.', hintKey:'conditional2'},
{id:'x9', level:'B2', instruction:'Сделай Third Conditional (прошлое, которого не было):', original:'She didn\u2019t study. She failed the exam.', answer:'If she had studied, she would not have failed the exam.', hintKey:'conditional3'},
{id:'x10', level:'B1', instruction:'Добавь разделительный вопрос (question tag):', original:'You are tired.', answer:'You are tired, aren\u2019t you?', hintKey:'question-tags'},
{id:'x11', level:'B1', instruction:'Поставь в Past Continuous:', original:'I / read a book / when / he / call', answer:'I was reading a book when he called.', hintKey:'past-continuous'},
{id:'x12', level:'B1', instruction:'Составь сравнительную степень (expensive):', original:'This phone / that one', answer:'This phone is more expensive than that one.', hintKey:'comparatives'}
];

function renderTransformPractice(){
  const pool = shuffle(filterByLevel(TRANSFORM_BANK)).slice(0,6);
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className='card';
  header.innerHTML = `<h2>Трансформация предложений</h2><p class="muted">Преобразуй предложение по инструкции. Если не помнишь правило — открой подсказку.</p>`;
  app.appendChild(header);

  if(pool.length===0){
    app.innerHTML += '<p class="muted">Для выбранного уровня пока нет заданий.</p>';
    return;
  }

  pool.forEach((item,idx)=>{
    const card = document.createElement('div');
    card.className='card q-card';
    card.innerHTML = `<span class="tag ${item.level==='B2'?'b2':''}">${item.level}</span>
      <h3>${idx+1}. ${item.instruction}</h3>
      <p class="muted" style="margin-top:-6px;">${item.original}</p>`;
    const input = document.createElement('input');
    input.type='text'; input.className='answer-input'; input.placeholder='Напиши преобразованное предложение...';
    const btnRow = document.createElement('div');
    btnRow.className='btn-row';
    const checkBtn = document.createElement('button');
    checkBtn.className='btn'; checkBtn.textContent='Проверить';
    const feedback = document.createElement('div');
    feedback.className='feedback';

    checkBtn.addEventListener('click', ()=>{
      const ok = normalizeAnswer(input.value)===normalizeAnswer(item.answer);
      feedback.className = 'feedback ' + (ok?'good':'bad');
      feedback.innerHTML = ok
        ? '✅ Верно!'
        : '❌ Не совсем. Правильный вариант: <b>'+item.answer+'</b>';
    });

    btnRow.appendChild(checkBtn);
    attachHint(btnRow, item.hintKey);
    card.appendChild(input);
    card.appendChild(btnRow);
    card.appendChild(feedback);
    app.appendChild(card);
  });
}

/* ==================== СОБЕРИ ПРЕДЛОЖЕНИЕ ИЗ СЛОВ ==================== */
const BUILDER_BANK = [
{id:'b1', level:'B1', words:['always','She','coffee','drinks','in','the','morning','.'], answer:'She always drinks coffee in the morning.', hintKey:'word-order'},
{id:'b2', level:'B1', words:['you','Where','from','are','?'], answer:'Where are you from?', hintKey:'word-order'},
{id:'b3', level:'B1', words:['not','I','do','like','spicy','food','.'], answer:'I do not like spicy food.', hintKey:'present-simple'},
{id:'b4', level:'B2', words:['never','have','I','this','seen','movie','.'], answer:'I have never seen this movie.', hintKey:'present-perfect'},
{id:'b5', level:'B1', words:['yesterday','did','you','What','do','?'], answer:'What did you do yesterday?', hintKey:'past-simple'},
{id:'b6', level:'B1', words:['quickly','She','the','solved','problem','.'], answer:'She quickly solved the problem.', hintKey:'word-order'},
{id:'b7', level:'B1', words:['will','tomorrow','call','I','you','.'], answer:'I will call you tomorrow.', hintKey:'future-simple'},
{id:'b8', level:'B2', words:['long','have','you','How','been','waiting','?'], answer:'How long have you been waiting?', hintKey:'present-perfect-continuous'},
{id:'b9', level:'B2', words:['is','not','English','difficult','that','.'], answer:'English is not that difficult.', hintKey:'word-order'},
{id:'b10', level:'B2', words:['If','it','rains',',','I','will','stay','home','.'], answer:'If it rains, I will stay home.', hintKey:'conditional1'}
];

function renderBuilderPractice(){
  const pool = shuffle(filterByLevel(BUILDER_BANK)).slice(0,6);
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className='card';
  header.innerHTML = `<h2>Собери предложение из слов</h2><p class="muted">Нажимай слова по порядку, чтобы составить правильное предложение.</p>`;
  app.appendChild(header);

  if(pool.length===0){
    app.innerHTML += '<p class="muted">Для выбранного уровня пока нет заданий.</p>';
    return;
  }

  pool.forEach((item,idx)=>{
    const card = document.createElement('div');
    card.className='card q-card';
    card.innerHTML = `<span class="tag ${item.level==='B2'?'b2':''}">${item.level}</span><h3>Предложение ${idx+1}</h3>`;

    const built = document.createElement('div');
    built.className = 'builder-built';
    built.textContent = '(нажимай слова ниже)';

    const pile = document.createElement('div');
    pile.className = 'builder-pile';

    let chosen = [];
    function refreshBuilt(){
      if(chosen.length===0){
        built.textContent = '(нажимай слова ниже)';
        return;
      }
      let s = chosen.join(' ').replace(/ ([,.?!])/g,'$1');
      built.textContent = s;
    }

    const shuffledWords = shuffle(item.words.map((w,i)=>({w,i})));
    shuffledWords.forEach(({w,i})=>{
      const tok = document.createElement('button');
      tok.className = 'token';
      tok.textContent = w;
      tok.addEventListener('click', ()=>{
        if(tok.classList.contains('used')) return;
        tok.classList.add('used');
        chosen.push(w);
        refreshBuilt();
      });
      pile.appendChild(tok);
    });

    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';
    const resetBtn = document.createElement('button');
    resetBtn.className='btn secondary'; resetBtn.textContent='Сбросить';
    resetBtn.addEventListener('click', ()=>{
      chosen = [];
      pile.querySelectorAll('.token').forEach(t=>t.classList.remove('used'));
      refreshBuilt();
      feedback.innerHTML = '';
      feedback.className = 'feedback';
    });
    const checkBtn = document.createElement('button');
    checkBtn.className='btn'; checkBtn.textContent='Проверить';
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    checkBtn.addEventListener('click', ()=>{
      const s = chosen.join(' ').replace(/ ([,.?!])/g,'$1');
      const ok = normalizeAnswer(s)===normalizeAnswer(item.answer);
      feedback.className = 'feedback ' + (ok?'good':'bad');
      feedback.innerHTML = ok ? '✅ Верно!' : '❌ Правильный порядок: <b>'+item.answer+'</b>';
    });

    btnRow.appendChild(checkBtn);
    btnRow.appendChild(resetBtn);
    attachHint(btnRow, item.hintKey);

    card.appendChild(built);
    card.appendChild(pile);
    card.appendChild(btnRow);
    card.appendChild(feedback);
    app.appendChild(card);
  });
}

/* ==================== НАЙДИ ОШИБКУ ==================== */
const FIND_ERROR_BANK = [
{id:'e1', level:'B1', words:['She',"don't",'like','coffee','.'], errorIndex:1, correctWord:"doesn't", hintKey:'present-simple', explanation:'С he/she/it в Present Simple нужен вспомогательный глагол doesn\u2019t, а не don\u2019t.'},
{id:'e2', level:'B1', words:['He','goed','to','the','party','.'], errorIndex:1, correctWord:'went', hintKey:'past-simple', explanation:'"Go" — неправильный глагол, прошедшая форма — went, а не goed.'},
{id:'e3', level:'B2', words:['I','have','never','saw','this','film','.'], errorIndex:3, correctWord:'seen', hintKey:'present-perfect', explanation:'В Present Perfect используется третья форма глагола (V3) — seen, а не saw.'},
{id:'e4', level:'B2', words:['I','am','understanding','you','.'], errorIndex:2, correctWord:'understand', hintKey:'state-verbs', explanation:'"Understand" — глагол состояния, он не используется в форме Continuous.'},
{id:'e5', level:'B1', words:['She','is','married','with','a','doctor','.'], errorIndex:3, correctWord:'to', hintKey:'false-friends', explanation:'Правильный предлог после married — to, а не with.'},
{id:'e6', level:'B1', words:['I',"don't",'have','much','friends','.'], errorIndex:3, correctWord:'many', hintKey:'countable-uncountable', explanation:'"Friends" — исчисляемое существительное во множественном числе, поэтому нужно many, а не much.'},
{id:'e7', level:'B2', words:['If','I','will','have','time',',','I','will','call','you','.'], errorIndex:2, correctWord:'have', hintKey:'conditional1', explanation:'В придаточном условия (после if) в First Conditional используется Present Simple, а не will.'},
{id:'e8', level:'B1', words:['This','book','is','more','interesting','that','the','other','one','.'], errorIndex:5, correctWord:'than', hintKey:'comparatives', explanation:'В сравнительной конструкции используется than (чем), а не that.'},
{id:'e9', level:'B1', words:['Where','are','you','go','?'], errorIndex:3, correctWord:'going', hintKey:'present-continuous', explanation:'После вспомогательного are в Present Continuous нужна форма с -ing: going.'},
{id:'e10', level:'B2', words:['I','live','here','since','five','years','.'], errorIndex:3, correctWord:'for', hintKey:'since-for', explanation:'С периодом времени (пять лет) используется for, а since — с точкой отсчёта (since 2020).'}
];

function renderFindErrorPractice(){
  const pool = shuffle(filterByLevel(FIND_ERROR_BANK)).slice(0,6);
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад';
  back.addEventListener('click', renderPractice);
  app.appendChild(back);

  const header = document.createElement('div');
  header.className='card';
  header.innerHTML = `<h2>Найди ошибку</h2><p class="muted">Нажми на слово, которое, по-твоему, является ошибкой.</p>`;
  app.appendChild(header);

  if(pool.length===0){
    app.innerHTML += '<p class="muted">Для выбранного уровня пока нет заданий.</p>';
    return;
  }

  pool.forEach((item,idx)=>{
    const card = document.createElement('div');
    card.className='card q-card';
    card.innerHTML = `<span class="tag ${item.level==='B2'?'b2':''}">${item.level}</span><h3>Предложение ${idx+1}</h3>`;

    const sentence = document.createElement('div');
    sentence.className = 'error-sentence';
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    const btnRow = document.createElement('div');
    btnRow.className='btn-row';

    item.words.forEach((w,i)=>{
      const span = document.createElement('span');
      span.className = 'error-word';
      span.textContent = w;
      span.addEventListener('click', ()=>{
        if(sentence.classList.contains('answered')) return;
        sentence.classList.add('answered');
        if(i===item.errorIndex){
          span.classList.add('correct-pick');
          feedback.className = 'feedback good';
          feedback.innerHTML = '✅ Верно! Нужно: <b>'+item.correctWord+'</b>. '+item.explanation;
        } else {
          span.classList.add('wrong-pick');
          sentence.children[item.errorIndex].classList.add('correct-pick');
          feedback.className = 'feedback bad';
          feedback.innerHTML = '❌ Ошибка не здесь. Правильно: <b>'+item.correctWord+'</b>. '+item.explanation;
        }
      });
      sentence.appendChild(span);
    });

    attachHint(btnRow, item.hintKey);
    card.appendChild(sentence);
    card.appendChild(feedback);
    card.appendChild(btnRow);
    app.appendChild(card);
  });
}

/* ==================== ОБНОВЛЁННАЯ СТРАНИЦА ПРАКТИКИ ==================== */
function renderPractice(){
  app.innerHTML = `
    <h1>Практика</h1>
    <p class="muted">Выбери тип упражнения. Пассивные тесты — для проверки понимания, активные — для реального навыка.</p>
    <h3 style="color:var(--muted);font-size:14px;margin:16px 0 8px;">Узнавание (пассивная практика)</h3>
    <div class="grid">
      <div class="tile" id="goQuiz"><h3>📝 Тест (грамматика)</h3><p class="muted">Выбери правильный вариант ответа.</p></div>
      <div class="tile" id="goMatch"><h3>🔗 Сопоставление слов</h3><p class="muted">Соедини английское слово с переводом.</p></div>
    </div>
    <h3 style="color:var(--muted);font-size:14px;margin:20px 0 8px;">Активная практика (реальный навык)</h3>
    <div class="grid">
      <div class="tile" id="goTranslate"><h3>✍️ Перевод RU → EN</h3><p class="muted">Сам переведи предложение и сверься с эталоном.</p></div>
      <div class="tile" id="goTransform"><h3>🔄 Трансформация предложений</h3><p class="muted">Passive, косвенная речь, времена, условные.</p></div>
      <div class="tile" id="goBuilder"><h3>🧩 Собери предложение</h3><p class="muted">Тренируй порядок слов.</p></div>
      <div class="tile" id="goFindError"><h3>🔀 Найди ошибку</h3><p class="muted">Найди и пойми, что не так в предложении.</p></div>
    </div>
  `;
  document.getElementById('goQuiz').addEventListener('click', renderQuiz);
  document.getElementById('goMatch').addEventListener('click', renderMatching);
  document.getElementById('goTranslate').addEventListener('click', renderTranslatePractice);
  document.getElementById('goTransform').addEventListener('click', renderTransformPractice);
  document.getElementById('goBuilder').addEventListener('click', renderBuilderPractice);
  document.getElementById('goFindError').addEventListener('click', renderFindErrorPractice);
}

/* ==================== ТИПИЧНЫЕ ОШИБКИ РУССКОГОВОРЯЩИХ ==================== */
const MISTAKES = [
{title:'Забытый артикль', wrong:'I am engineer.', right:'I am an engineer.', explanation:'В русском языке артиклей нет, поэтому мы часто их пропускаем. В английском перед исчисляемым существительным в единственном числе почти всегда нужен артикль a/an/the.'},
{title:'"Magazine" — это не магазин', wrong:'I went to the magazine to buy bread.', right:'I went to the shop to buy bread.', explanation:'Magazine значит "журнал". "Магазин" по-английски — shop или store.'},
{title:'Возраст через "have"', wrong:'I have 30 years.', right:'I am 30 years old.', explanation:'В русском "мне 30 лет" дословно переводится через "have", но в английском возраст выражается через глагол to be: I am 30.'},
{title:'much вместо many', wrong:'I have much friends.', right:'I have many friends.', explanation:'"Friends" — исчисляемое существительное во множественном числе, значит нужно many. Much используется только с неисчисляемыми (much time, much water).'},
{title:'Порядок слов в вопросе', wrong:'Where you are from?', right:'Where are you from?', explanation:'В вопросах вспомогательный/смысловой глагол (are, do, did...) ставится перед подлежащим, а не после.'},
{title:'Двойное отрицание', wrong:"I don't know nothing.", right:"I don't know anything.", explanation:'В английском (в отличие от русского) двойное отрицание недопустимо в стандартной речи. После отрицания используется any-, а не no-.'},
{title:'since вместо for', wrong:'I live here since 5 years.', right:'I have lived here for 5 years.', explanation:'For используется с периодом времени (5 лет), since — с точкой отсчёта (since 2019). Плюс само предложение требует Present Perfect, а не Present Simple.'},
{title:'actually ≠ актуально', wrong:'This topic is very actually now.', right:'This topic is very relevant/topical now.', explanation:'Actually переводится как "на самом деле", а не "актуально". "Актуальный" по-английски — relevant или topical.'},
{title:'Глаголы состояния в Continuous', wrong:'I am understanding you.', right:'I understand you.', explanation:'Глаголы состояния (understand, know, like, want, believe) не используются в форме -ing, даже если хочется подчеркнуть, что это происходит "прямо сейчас".'},
{title:'married with вместо married to', wrong:'She is married with a doctor.', right:'She is married to a doctor.', explanation:'После married правильный предлог — to, а не with.'},
{title:'bored vs boring', wrong:"I'm boring at this lecture.", right:"I'm bored at this lecture.", explanation:'"-ing" описывает источник эмоции (boring — скучный/наводящий скуку), "-ed" описывает то, что чувствует человек (bored — которому скучно). "I\u2019m boring" значит "я скучный человек", а не "мне скучно".'},
{title:'sympathy ≠ симпатия', wrong:'I have sympathy for him (в значении "он мне нравится")', right:'I like him. / I fancy him.', explanation:'Sympathy в английском — это сочувствие/сострадание, а не романтическая симпатия. Для "он мне нравится" используйте like или fancy.'}
];

function renderMistakes(){
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад к теории';
  app.innerHTML='';
  back.addEventListener('click', renderTheoryList);
  app.appendChild(back);

  const h = document.createElement('h1');
  h.textContent = '⚠️ Типичные ошибки русскоговорящих';
  app.appendChild(h);
  const p = document.createElement('p');
  p.className='muted';
  p.textContent = 'Это то, что почти всегда путают из-за влияния русского языка. Разбирай внимательно — это сэкономит тебе годы неправильной речи.';
  app.appendChild(p);

  MISTAKES.forEach(m=>{
    const card = document.createElement('div');
    card.className='card mistake-card';
    card.innerHTML = `
      <h3>${m.title}</h3>
      <div class="mistake-row wrong-row">❌ <span>${m.wrong}</span></div>
      <div class="mistake-row right-row">✅ <span>${m.right}</span></div>
      <p class="muted" style="margin-top:8px;">${m.explanation}</p>
    `;
    app.appendChild(card);
  });
}

/* ==================== ИДИОМЫ И РАЗГОВОРНЫЕ ФРАЗЫ ==================== */
const IDIOMS = [
{en:'break the ice', ru:'растопить лёд, снять напряжение', example: ex([['He','он'],['told','рассказал'],['a','—'],['joke','шутку'],['to','чтобы'],['break','растопить'],['the','—'],['ice','лёд'],['.','']])},
{en:'piece of cake', ru:'проще простого', example: ex([['Don\u2019t','не'],['worry',''],[',',''],['the','—'],['test','тест'],['is','—'],['a','—'],['piece','кусок'],['of','—'],['cake','торта'],['.','']])},
{en:'get the hang of it', ru:'приноровиться, разобраться', example: ex([['It','это'],['took','заняло'],['a','—'],['while',',время'],[',',''],['but','но'],['I','я'],['got','приобрёл'],['the','—'],['hang','сноровку'],['of','—'],['it','в этом'],['.','']])},
{en:'hit the books', ru:'усердно учиться, засесть за учёбу', example: ex([['I','я'],['need','должен'],['to','—'],['hit','ударить'],['the','—'],['books','книги'],['before','перед'],['the','—'],['exam','экзаменом'],['.','']])},
{en:'under the weather', ru:'неважно себя чувствовать', example: ex([['I','я'],['feel','чувствую'],['a','—'],['bit','немного'],['under','под'],['the','—'],['weather','погодой'],['today','сегодня'],['.','']])},
{en:'cost an arm and a leg', ru:'стоить очень дорого', example: ex([['That','эта'],['car','машина'],['cost','стоила'],['an','—'],['arm','руку'],['and','и'],['a','—'],['leg','ногу'],['.','']])},
{en:'let the cat out of the bag', ru:'проболтаться, выдать секрет', example: ex([['She','она'],['let','выпустила'],['the','—'],['cat','кота'],['out','из'],['of','—'],['the','—'],['bag','мешка'],['.','']])},
{en:'once in a blue moon', ru:'очень редко', example: ex([['We','мы'],['only','только'],['meet','встречаемся'],['once','раз'],['in','в'],['a','—'],['blue','синюю'],['moon','луну'],['.','']])},
{en:'on the same page', ru:'на одной волне, понимать друг друга', example: ex([['Let\u2019s','давай'],['make','убедимся'],['sure','что'],['we','мы'],['are','—'],['on','на'],['the','—'],['same','той же'],['page','странице'],['.','']])},
{en:'call it a day', ru:'закончить на сегодня', example: ex([['I\u2019m','я'],['tired',',устал'],[',',''],['let\u2019s','давай'],['call','назовём'],['it','это'],['a','—'],['day','днём'],['.','']])},
{en:'speak of the devil', ru:'лёгок на помине', example: ex([['Speak','говори'],['of','—'],['the','—'],['devil',',дьяволе'],[',',''],['here','вот'],['he','он'],['is','—'],['.','']])},
{en:'hit the road', ru:'отправиться в путь', example: ex([['It\u2019s','это'],['getting','становится'],['late',',поздно'],[',',''],['we','мы'],['should','должны'],['hit','ударить'],['the','—'],['road','дорогу'],['.','']])},
{en:'give someone the benefit of the doubt', ru:'поверить на слово, не сомневаться', example: ex([['I\u2019ll','я'],['give','дам'],['you','тебе'],['the','—'],['benefit','пользу'],['of','—'],['the','—'],['doubt','сомнения'],['.','']])},
{en:'in the same boat', ru:'в одинаковой ситуации', example: ex([['Don\u2019t','не'],['worry',',беспокойся'],[',',''],['we','мы'],['are','—'],['all','все'],['in','в'],['the','—'],['same','той же'],['boat','лодке'],['.','']])},
{en:'to make a long story short', ru:'короче говоря', example: ex([['To','—'],['make','сделать'],['a','—'],['long','длинную'],['story','историю'],['short',',короткой'],[',',''],['we','мы'],['won','выиграли'],['.','']])},
{en:'the ball is in your court', ru:'теперь решение за тобой', example: ex([['I','я'],['have','—'],['done','сделал'],['my','мою'],['part',',часть'],[',',''],['the','—'],['ball','мяч'],['is','—'],['in','на'],['your','твоей'],['court','площадке'],['.','']])},
{en:'bite the bullet', ru:'стиснуть зубы и сделать что-то неприятное', example: ex([['I','я'],['just','просто'],['have','должен'],['to','—'],['bite','прикусить'],['the','—'],['bullet','пулю'],['and','и'],['do','сделать'],['it','это'],['.','']])},
{en:'break a leg', ru:'ни пуха ни пера! (пожелание удачи)', example: ex([['Good','удачи'],['luck','—'],['on','на'],['your','твоём'],['exam',',экзамене'],[',',''],['break','сломай'],['a','—'],['leg','ногу'],['!','']])},
{en:'out of the blue', ru:'неожиданно, внезапно', example: ex([['He','он'],['called','позвонил'],['me','мне'],['out','из'],['of','—'],['the','—'],['blue','синевы'],['.','']])},
{en:'a piece of my mind', ru:'высказать всё, что думаешь', example: ex([['I','я'],['gave','дал'],['him','ему'],['a','—'],['piece','кусок'],['of','—'],['my','моего'],['mind','ума'],['.','']])}
];

function renderIdioms(){
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад к теории';
  back.addEventListener('click', renderTheoryList);
  app.appendChild(back);

  const h = document.createElement('h1');
  h.textContent = '🗣️ Идиомы и разговорные фразы';
  app.appendChild(h);
  const p = document.createElement('p');
  p.className='muted';
  p.textContent = 'Это то, что делает речь естественной. Клик по слову в примере — перевод, 🔊 — произношение.';
  app.appendChild(p);

  const list = document.createElement('div');
  list.className='card';
  IDIOMS.forEach(idiom=>{
    const item = document.createElement('div');
    item.className = 'idiom-item';
    item.innerHTML = `<h3>${idiom.en}</h3><p class="idiom-ru">${idiom.ru}</p>`;
    item.appendChild(renderExample(idiom.example));
    list.appendChild(item);
  });
  app.appendChild(list);
}

/* ==================== ПРАКТИЧЕСКИЕ ШАБЛОНЫ ==================== */
const TEMPLATES = [
{
  id:'tpl1', title:'Письмо начальнику: больничный / отгул', level:'B1',
  intro:'Короткое, вежливое и по делу — стандарт для рабочей переписки.',
  lines:[
    ex([['Subject',':тема'],[':',''],['Sick','больничный'],['leave','отпуск'],['today','сегодня']]),
    ex([['Hi','привет'],['[Name]',',имя'],[',','']]),
    ex([['I','я'],['am','—'],['not','не'],['feeling','чувствую себя'],['well','хорошо'],['today','сегодня'],['and','и'],['won\u2019t','не смогу'],['be','быть'],['able','способным'],['to','—'],['come','прийти'],['to','на'],['work','работу'],['.','']]),
    ex([['I','я'],['will','—'],['catch','наверстаю'],['up','—'],['on','—'],['my','мои'],['tasks','задачи'],['as','как только'],['soon','скоро'],['as','как'],['I','я'],['am','—'],['back','обратно'],['.','']]),
    ex([['Thank','спасибо'],['you','вам'],['for','за'],['your','ваше'],['understanding','понимание'],['.','']])
  ],
  tips:'Ключевые фразы: "I am not feeling well", "I won\u2019t be able to...", "Thank you for your understanding."'
},
{
  id:'tpl2', title:'Собеседование: расскажи о себе', level:'B1',
  intro:'Структура: кто ты сейчас → опыт → почему тебе интересна эта работа.',
  lines:[
    ex([['I','я'],['am','—'],['currently','в настоящее время'],['working','работаю'],['as','как'],['a','—'],['marketing','маркетолог'],['specialist','специалист']]),
    ex([['I','я'],['have','имею'],['three','три'],['years','года'],['of','—'],['experience','опыта'],['in','в'],['this','этой'],['field','сфере'],['.','']]),
    ex([['I','я'],['am','—'],['interested','заинтересован'],['in','в'],['this','этой'],['position','позиции'],['because','потому что'],['it','это'],['matches','соответствует'],['my','моим'],['skills','навыкам'],['.','']])
  ],
  tips:'Ключевые фразы: "I am currently working as...", "I have X years of experience in...", "I am interested in this position because..."'
},
{
  id:'tpl3', title:'Small talk: знакомство на мероприятии', level:'B1',
  intro:'Лёгкий разговор для нетворкинга или вечеринки.',
  lines:[
    ex([['Hi',',привет'],[',',''],['I','я'],['don\u2019t','не'],['think','думаю'],['we\u2019ve','мы'],['met','встречались'],['.',''],['I\u2019m','я'],['[Name]','имя'],['.','']]),
    ex([['What','что'],['brings','приводит'],['you','тебя'],['here','сюда'],['?','']]),
    ex([['So',',так'],[',',''],['what','что'],['do','—'],['you','ты'],['do','делаешь'],['for','ради'],['a','—'],['living','жизни'],['?','']])
  ],
  tips:'Ключевые фразы: "I don\u2019t think we\u2019ve met", "What brings you here?", "What do you do for a living?"'
},
{
  id:'tpl4', title:'Жалоба по email: задержка доставки', level:'B2',
  intro:'Вежливо, но твёрдо: факт → неудобство → что вы хотите.',
  lines:[
    ex([['I','я'],['am','—'],['writing','пишу'],['to','чтобы'],['complain','пожаловаться'],['about','о'],['a','—'],['delayed','задержанной'],['delivery','доставке'],['.','']]),
    ex([['My','мой'],['order','заказ'],['was','был'],['supposed','должен был'],['to','—'],['arrive','прибыть'],['last','на прошлой'],['week','неделе'],['.','']]),
    ex([['I','я'],['would','—'],['appreciate','оценил бы'],['it','это'],['if','если'],['you','вы'],['could','могли'],['resolve','решить'],['this','эту'],['issue','проблему'],['as','как'],['soon','скоро'],['as','как'],['possible','возможно'],['.','']])
  ],
  tips:'Ключевые фразы: "I am writing to complain about...", "was supposed to...", "I would appreciate it if..."'
},
{
  id:'tpl5', title:'Запрос отпуска у руководителя', level:'B2',
  intro:'Официальный, но короткий формат запроса.',
  lines:[
    ex([['I','я'],['would','—'],['like','хотел бы'],['to','—'],['request','запросить'],['a','—'],['few','несколько'],['days','дней'],['off','отгула'],['next','на следующей'],['month','месяц'],['.','']]),
    ex([['I','я'],['will','—'],['make','сделаю'],['sure','уверен'],['everything','всё'],['is','—'],['covered','покрыто'],['before','до'],['I','я'],['leave','ухожу'],['.','']]),
    ex([['Please','пожалуйста'],['let','дайте'],['me','мне'],['know','знать'],['if','если'],['this','это'],['works','подходит'],['for','для'],['you','вас'],['.','']])
  ],
  tips:'Ключевые фразы: "I would like to request...", "I will make sure everything is covered", "Please let me know if this works for you."'
}
];

function renderTemplates(){
  app.innerHTML='';
  const back = document.createElement('button');
  back.className='back-btn'; back.textContent='← Назад к теории';
  back.addEventListener('click', renderTheoryList);
  app.appendChild(back);

  const h = document.createElement('h1');
  h.textContent = '📧 Практические шаблоны';
  app.appendChild(h);
  const p = document.createElement('p');
  p.className='muted';
  p.textContent = 'Готовые структуры для реальных ситуаций: работа, собеседования, переписка.';
  app.appendChild(p);

  TEMPLATES.forEach(t=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `<span class="tag ${t.level==='B2'?'b2':''}">${t.level}</span><h2>${t.title}</h2><p class="muted">${t.intro}</p>`;
    t.lines.forEach(l=> card.appendChild(renderExample(l)));
    const tips = document.createElement('p');
    tips.className='muted';
    tips.style.marginTop='10px';
    tips.innerHTML = '<b>Подсказка:</b> ' + t.tips;
    card.appendChild(tips);
    app.appendChild(card);
  });
}

/* ==================== ОБНОВЛЁННАЯ СТРАНИЦА ТЕОРИИ (со спецразделами) ==================== */
function renderTheoryList(){
  const topics = filterByLevel(GRAMMAR);
  app.innerHTML = `
    <h1>Теория</h1>
    <p class="muted">Спецразделы — то, что реально помогает звучать естественно. Ниже — все грамматические темы.</p>
    <div class="grid" id="specialGrid" style="margin-bottom:22px;"></div>
    <h3 style="color:var(--muted);font-size:14px;margin-bottom:8px;">Грамматика по темам</h3>
    <div class="grid" id="topicGrid"></div>
  `;
  const specialGrid = document.getElementById('specialGrid');
  const specials = [
    {title:'⚠️ Типичные ошибки', desc:'Ловушки русскоговорящих: артикли, кальки, false friends.', fn:renderMistakes},
    {title:'🗣️ Идиомы и фразы', desc:'Разговорные выражения уровня B2.', fn:renderIdioms},
    {title:'📧 Практические шаблоны', desc:'Email, собеседование, small talk.', fn:renderTemplates}
  ];
  specials.forEach(s=>{
    const tile = document.createElement('div');
    tile.className = 'tile special-tile';
    tile.innerHTML = `<h3>${s.title}</h3><p class="muted">${s.desc}</p>`;
    tile.addEventListener('click', s.fn);
    specialGrid.appendChild(tile);
  });

  const grid = document.getElementById('topicGrid');
  topics.forEach(t=>{
    const tile = document.createElement('div');
    tile.className = 'tile';
    const viewed = PROGRESS.viewedTopics.includes(t.id);
    tile.innerHTML = `<span class="tag ${t.level==='B2'?'b2':''}">${t.level}</span> ${viewed?'<span class="check">✓</span>':''}<h3>${t.title}</h3>`;
    tile.addEventListener('click', ()=> renderTheoryDetail(t.id));
    grid.appendChild(tile);
  });
}

/* ============================================================
   БЛОК 3: ВИЗУАЛИЗАЦИЯ ПРАВИЛ (SVG-схемы вместо голого текста)
   ============================================================ */

/* ---------- базовый шаблон "линия времени" ---------- */
function timelineBase(markers, caption){
  return `<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" class="rule-svg">
    <line x1="30" y1="75" x2="570" y2="75" stroke="var(--muted)" stroke-width="2"/>
    <line x1="300" y1="20" x2="300" y2="130" stroke="var(--accent2)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="30" y="106" fill="var(--muted)" font-size="13">Прошлое</text>
    <text x="300" y="18" fill="var(--accent2)" font-size="13" text-anchor="middle" font-weight="600">Сейчас</text>
    <text x="570" y="106" fill="var(--muted)" font-size="13" text-anchor="end">Будущее</text>
    ${markers}
    <text x="300" y="145" fill="var(--text)" font-size="13" text-anchor="middle">${caption}</text>
  </svg>`;
}

/* ---------- диаграмма "если — то" для условных предложений ---------- */
function conditionalSVG(ifLabel, resultLabel, dashed){
  return `<svg viewBox="0 0 600 110" xmlns="http://www.w3.org/2000/svg" class="rule-svg">
    <defs><marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="var(--accent2)"/>
    </marker></defs>
    <rect x="25" y="25" width="250" height="55" rx="10" fill="rgba(91,141,239,0.15)" stroke="var(--accent)" stroke-width="1.5" ${dashed?'stroke-dasharray="6,4"':''}/>
    <text x="150" y="58" fill="var(--text)" font-size="13" text-anchor="middle">${ifLabel}</text>
    <line x1="278" y1="52" x2="322" y2="52" stroke="var(--accent2)" stroke-width="2" marker-end="url(#arrowHead)"/>
    <rect x="325" y="25" width="250" height="55" rx="10" fill="rgba(63,208,201,0.12)" stroke="var(--accent2)" stroke-width="1.5" ${dashed?'stroke-dasharray="6,4"':''}/>
    <text x="450" y="58" fill="var(--text)" font-size="13" text-anchor="middle">${resultLabel}</text>
    <text x="300" y="102" fill="var(--muted)" font-size="12" text-anchor="middle">${dashed ? 'нереальная / гипотетическая ситуация' : 'реальная, возможная ситуация'}</text>
  </svg>`;
}

/* ---------- диаграмма Active → Passive ---------- */
function passiveSVG(){
  return `<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" class="rule-svg">
    <defs><marker id="arrowHead2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="var(--accent)"/>
    </marker></defs>
    <text x="10" y="25" fill="var(--muted)" font-size="12">Active:</text>
    <rect x="20" y="35" width="150" height="40" rx="8" fill="rgba(91,141,239,0.15)" stroke="var(--accent)"/>
    <text x="95" y="60" fill="var(--text)" font-size="12" text-anchor="middle">Anna (агент)</text>
    <line x1="170" y1="55" x2="205" y2="55" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowHead2)"/>
    <rect x="210" y="35" width="120" height="40" rx="8" fill="rgba(91,141,239,0.10)" stroke="var(--accent)"/>
    <text x="270" y="60" fill="var(--text)" font-size="12" text-anchor="middle">wrote</text>
    <line x1="330" y1="55" x2="365" y2="55" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowHead2)"/>
    <rect x="370" y="35" width="150" height="40" rx="8" fill="rgba(91,141,239,0.15)" stroke="var(--accent)"/>
    <text x="445" y="60" fill="var(--text)" font-size="12" text-anchor="middle">the letter (объект)</text>

    <text x="10" y="110" fill="var(--muted)" font-size="12">Passive:</text>
    <rect x="20" y="120" width="150" height="40" rx="8" fill="rgba(63,208,201,0.15)" stroke="var(--accent2)"/>
    <text x="95" y="145" fill="var(--text)" font-size="12" text-anchor="middle">The letter (было объектом)</text>
    <line x1="170" y1="140" x2="205" y2="140" stroke="var(--accent2)" stroke-width="2" marker-end="url(#arrowHead2)"/>
    <rect x="210" y="120" width="150" height="40" rx="8" fill="rgba(63,208,201,0.10)" stroke="var(--accent2)"/>
    <text x="285" y="145" fill="var(--text)" font-size="12" text-anchor="middle">was written</text>
    <line x1="360" y1="140" x2="395" y2="140" stroke="var(--accent2)" stroke-width="2" marker-end="url(#arrowHead2)"/>
    <rect x="400" y="120" width="150" height="40" rx="8" fill="rgba(63,208,201,0.15)" stroke="var(--accent2)"/>
    <text x="475" y="145" fill="var(--text)" font-size="12" text-anchor="middle">by Anna (уже не важно)</text>
  </svg>`;
}

/* ---------- шкала силы модальных глаголов ---------- */
function modalsSVG(){
  return `<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" class="rule-svg">
    <defs>
      <linearGradient id="modalGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="var(--accent2)"/>
        <stop offset="100%" stop-color="var(--bad)"/>
      </linearGradient>
    </defs>
    <rect x="30" y="55" width="540" height="10" rx="5" fill="url(#modalGrad)"/>
    <text x="30" y="40" fill="var(--muted)" font-size="12">слабее (предположение)</text>
    <text x="570" y="40" fill="var(--muted)" font-size="12" text-anchor="end">сильнее (необходимость)</text>

    <circle cx="60" cy="60" r="6" fill="var(--text)"/><text x="60" y="90" fill="var(--text)" font-size="13" text-anchor="middle">might</text>
    <circle cx="180" cy="60" r="6" fill="var(--text)"/><text x="180" y="90" fill="var(--text)" font-size="13" text-anchor="middle">can</text>
    <circle cx="300" cy="60" r="6" fill="var(--text)"/><text x="300" y="90" fill="var(--text)" font-size="13" text-anchor="middle">should</text>
    <circle cx="420" cy="60" r="6" fill="var(--text)"/><text x="420" y="90" fill="var(--text)" font-size="13" text-anchor="middle">have to</text>
    <circle cx="540" cy="60" r="6" fill="var(--text)"/><text x="540" y="90" fill="var(--text)" font-size="13" text-anchor="middle">must</text>
  </svg>`;
}

/* ---------- столбики сравнительной/превосходной степени ---------- */
function comparativesSVG(){
  return `<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" class="rule-svg">
    <rect x="80" y="90" width="80" height="40" rx="6" fill="rgba(91,141,239,0.25)" stroke="var(--accent)"/>
    <text x="120" y="145" fill="var(--text)" font-size="13" text-anchor="middle">cheap</text>
    <rect x="260" y="60" width="80" height="70" rx="6" fill="rgba(91,141,239,0.45)" stroke="var(--accent)"/>
    <text x="300" y="145" fill="var(--text)" font-size="13" text-anchor="middle">cheaper</text>
    <rect x="440" y="25" width="80" height="105" rx="6" fill="var(--accent)"/>
    <text x="480" y="145" fill="var(--text)" font-size="13" text-anchor="middle">the cheapest</text>
  </svg>`;
}

/* ---------- строение простого предложения (S-V-O) ---------- */
function structureSVG(){
  return `<div class="structure-row">
    <div class="structure-box subj">Subject<br><span>She</span></div>
    <div class="structure-arrow">→</div>
    <div class="structure-box verb">Verb<br><span>reads</span></div>
    <div class="structure-arrow">→</div>
    <div class="structure-box obj">Object<br><span>a book</span></div>
  </div>`;
}

/* ---------- строчка иконок (для более простых тем) ---------- */
function emojiRow(items){
  return '<div class="visual-emoji-row">' + items.map(i=>
    `<div class="visual-emoji-item"><div class="emoji">${i.emoji}</div><div class="emoji-label">${i.label}</div></div>`
  ).join('') + '</div>';
}

/* ==================== СЛОВАРЬ ВИЗУАЛИЗАЦИЙ ПО ТЕМАМ ==================== */
const VISUALS = {
  'parts-of-speech': structureSVG(),

  'articles': emojiRow([
    {emoji:'📗', label:'a book — любая книга, впервые'},
    {emoji:'👉📕', label:'the book — та самая, уже известная'}
  ]),

  'countable-uncountable': emojiRow([
    {emoji:'🍎🍎🍎', label:'apples — исчисляемое: many apples'},
    {emoji:'💧', label:'water — неисчисляемое: much water'}
  ]),

  'prepositions-time-place': emojiRow([
    {emoji:'🕐', label:'at 5 o\u2019clock (точное время)'},
    {emoji:'📅', label:'on Monday (день)'},
    {emoji:'🗓️', label:'in July (месяц/период)'}
  ]),

  'present-simple': timelineBase(
    `<circle cx="90" cy="75" r="5" fill="var(--accent)"/>
     <circle cx="200" cy="75" r="5" fill="var(--accent)"/>
     <circle cx="300" cy="75" r="5" fill="var(--accent)"/>
     <circle cx="400" cy="75" r="5" fill="var(--accent)"/>
     <circle cx="500" cy="75" r="5" fill="var(--accent)"/>`,
    'Повторяющееся действие, привычка или факт'
  ),

  'present-continuous': timelineBase(
    `<circle cx="300" cy="75" r="10" fill="var(--accent)"/>
     <circle cx="300" cy="75" r="18" fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.4"/>`,
    'Происходит именно в момент разговора'
  ),

  'present-perfect': timelineBase(
    `<line x1="170" y1="75" x2="300" y2="75" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
     <circle cx="170" cy="75" r="6" fill="var(--accent)"/>
     <circle cx="300" cy="75" r="7" fill="var(--accent)"/>`,
    'Действие в прошлом важно результатом сейчас'
  ),

  'present-perfect-continuous': timelineBase(
    `<line x1="150" y1="75" x2="320" y2="75" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
     <circle cx="150" cy="75" r="6" fill="var(--accent)"/>
     <path d="M310,75 L330,68 L330,82 Z" fill="var(--accent)"/>`,
    'Действие длится и продолжается сейчас'
  ),

  'past-simple': timelineBase(
    `<circle cx="180" cy="75" r="7" fill="var(--accent2)"/>`,
    'Завершённое действие в конкретный момент прошлого'
  ),

  'past-continuous': timelineBase(
    `<line x1="140" y1="75" x2="230" y2="75" stroke="var(--accent2)" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
     <circle cx="190" cy="75" r="7" fill="var(--bad)"/>`,
    'Действие в процессе, которое прервало другое событие'
  ),

  'past-perfect': timelineBase(
    `<circle cx="90" cy="75" r="6" fill="var(--accent2)"/>
     <text x="90" y="60" fill="var(--accent2)" font-size="12" text-anchor="middle">1</text>
     <line x1="98" y1="75" x2="205" y2="75" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5,4"/>
     <circle cx="215" cy="75" r="6" fill="var(--accent2)"/>
     <text x="215" y="60" fill="var(--accent2)" font-size="12" text-anchor="middle">2</text>`,
    '1 — произошло раньше, 2 — тоже прошлое, но позже'
  ),

  'future-simple': timelineBase(
    `<circle cx="420" cy="75" r="7" fill="var(--accent)"/>`,
    'Решение в момент речи, обещание или предсказание'
  ),

  'going-to': timelineBase(
    `<line x1="300" y1="75" x2="410" y2="75" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6,4"/>
     <circle cx="420" cy="75" r="7" fill="var(--accent)"/>`,
    'Заранее запланированное намерение'
  ),

  'conditional1': conditionalSVG('If + Present Simple (it rains)', 'will + V (I will stay home)', false),
  'conditional2': conditionalSVG('If + Past Simple (I had money)', 'would + V (I would travel)', true),
  'conditional3': conditionalSVG('If + Past Perfect (I had known)', 'would have + V3 (I would have helped)', true),

  'passive': passiveSVG(),
  'modals': modalsSVG(),
  'comparatives': comparativesSVG()
};
