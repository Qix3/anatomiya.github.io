// Все вопросы по анатомии (правильный ответ всегда первый вариант в исходном массиве)
const allAnatomyQuestions = [
    {
        question: "Из каких частей состоит глотка",
        options: [
            "Pars nasalis, pars oralis, pars larungea",
            "Pars oralis, pars larungla, pars media",
            "Pars nasalis, pars oralis, pars inferior",
            "Pars nasalis, pars larungea, pars inferior"
        ],
        correctAnswer: 0
    },
    {
        question: "Части пищевода",
        options: [
            "Pars cervicalis, thoracica, abdominalis",
            "Pars oralis, pars cervicalis, pars thoracica",
            "Pars nasalis, pars thoracica, pars abdominalis",
            "Pars superior, media et inferior"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких слоёв состоит стенка пищевода",
        options: [
            "Мышечная, слизистая, подслизистая, адвентициальная",
            "Серозная, мышечная, слизистая",
            "Слизистая, подслизистая, мышечная",
            "Слизистая, подслизистая, серозная, адвентициальная"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие части имеет желудок",
        options: [
            "Pars cardiaca, corpus, fundus, pars pylorica",
            "Pars cardiaca, corpus, pars pylorica",
            "Pars pylorica, fundus, cervicis, corpus",
            "Pars cardiaca, cervicis, corpus, fundus"
        ],
        correctAnswer: 0
    },
    {
        question: "Как называется место входа в желудок",
        options: [
            "Pars cardiaca",
            "Pars pylorica",
            "Fundus",
            "Canalis pyloricus"
        ],
        correctAnswer: 0
    },
    {
        question: "Как называется место выхода из желудка",
        options: [
            "Pars pylorica",
            "Corpus ventricularis",
            "Pars cardiaca",
            "Fundus"
        ],
        correctAnswer: 0
    },
    {
        question: "Часть желудка, соединённая с пищеводом",
        options: [
            "Pars cardiaca",
            "Canalis pyloricus",
            "Pars pylorica",
            "Fundus"
        ],
        correctAnswer: 0
    },
    {
        question: "Части двенадцатиперстной кишки",
        options: [
            "Pars superior, descendens, horizontalis, ascendens",
            "Pars superior, inferior, descendens, anterior",
            "Pars superior, ascendens, posterior, horizontalis",
            "Pars horizontalis, inferior, ascendens, anterior"
        ],
        correctAnswer: 0
    },
    {
        question: "Части тонкой кишки",
        options: [
            "Двенадцатиперстная кишка, тощая и подвздошная кишка",
            "Двенадцатиперстная кишка, тощая и слепая кишка",
            "Подвздошная кишка, тощая и слепая кишка",
            "Подвздошная кишка, слепая кишка, прямая кишка"
        ],
        correctAnswer: 0
    },
    {
        question: "Отличие тонкого кишечника от толстого",
        options: [
            "Plicae circulares",
            "Appendices epiploicae",
            "Plicae semilunares",
            "Tunica muscularis"
        ],
        correctAnswer: 0
    },
    {
        question: "Отделы толстого кишечника",
        options: [
            "Слепая, ободочная и прямая кишки",
            "Слепая, поперечно-ободочная и прямая кишки",
            "Поперечно-ободочная, нисходящая и сигмовидная кишки",
            "Восходящая и нисходящая ободочные, прямая кишка"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхности печени",
        options: [
            "Facies diaphragmatica, visceralis",
            "Facies diaphragmatica, visceralis, anterior",
            "Facies diaphragmatica, inferior, anterior",
            "Facies visceralis, superior, posterior"
        ],
        correctAnswer: 0
    },
    {
        question: "Доли печени",
        options: [
            "Lobus dexter, sinister, quadratus, caudatus",
            "Lobus dexter, sinister, anterior, posterior",
            "Lobus dexter, sinister, quadratus, anterior",
            "Lobus dexter, sinister, caudatus, posterior"
        ],
        correctAnswer: 0
    },
    {
        question: "Отметьте связки печени",
        options: [
            "Lig. falciforme, lig. teres hepatis",
            "Lig. teres, lig. portal hepatis",
            "Lig. falciforme, lig. vesicae felleae",
            "Lig. coronarium, lig. quadratum"
        ],
        correctAnswer: 0
    },
    {
        question: "Где расположены ворота печени",
        options: [
            "В поперечной борозде",
            "В правой продольной борозде",
            "В левой продольной борозде",
            "В пищеводном вдавлении"
        ],
        correctAnswer: 0
    },
    {
        question: "Что находится в воротах печени",
        options: [
            "Собственная печёночная артерия, печёночный проток, воротная вена",
            "Междольковые вены и артерии",
            "Правый и левый желчные протоки",
            "Кровеносные, лимфатические сосуды и нервы"
        ],
        correctAnswer: 0
    },
    {
        question: "Части желчного пузыря",
        options: [
            "Дно, тело, шейка",
            "Головка, шейка, тело",
            "Дно, тело, проток",
            "Тело и шейка"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких протоков образуется общий желчный проток",
        options: [
            "Общий печёночный проток и пузырный проток",
            "Собственный желчный проток, пузырный проток",
            "Желчные протоки и собственный печёночный проток",
            "Долевые протоки и пузырный проток"
        ],
        correctAnswer: 0
    },
    {
        question: "Части поджелудочной железы",
        options: [
            "Головка, тело, хвост",
            "Головка, шейка, хвост",
            "Головка, тело, крючок",
            "Головка, шейка, тело"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие поверхности имеет тело поджелудочной железы",
        options: [
            "Переднюю, нижнюю, заднюю",
            "Переднюю и заднюю",
            "Верхнюю и нижнюю",
            "Медиальную и латеральную"
        ],
        correctAnswer: 0
    },
    {
        question: "Куда открываются общий желчный проток и проток поджелудочной железы",
        options: [
            "Papilla duodeni major",
            "Papilla duodeni minor",
            "Pars superior duodeni",
            "Pars inferior duodeni"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие органы расположены в верхнем этаже брюшной полости",
        options: [
            "Желудок, печень, селезёнка, верхняя часть 12-перстной кишки",
            "Тонкая и толстая кишка",
            "Печень, желудок, тощая кишка, селезёнка",
            "Тонкая кишка, желудок, селезёнка"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыта брюшиной подвздошная кишка",
        options: [
            "Интраперитонеально",
            "Мезоперитонеально",
            "С 2-х сторон",
            "Экстраперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыт брюшиной желудок",
        options: [
            "Интраперитонеально",
            "Мезоперитонеально",
            "С 2-х сторон",
            "Экстраперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Что покрывает брюшина",
        options: [
            "Стенки и органы брюшной и тазовой полости",
            "Стенки брюшной полости",
            "Органы брюшной полости и малого таза",
            "Органы грудной полости"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыта брюшиной печень",
        options: [
            "Мезоперитонеально",
            "С 2-х сторон",
            "Ретроперитонеально",
            "Экстраперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыта брюшиной восходящая и нисходящая ободочные кишки",
        options: [
            "Мезоперитонеально",
            "Со всех сторон",
            "Экстраперитонеально",
            "Интраперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыты брюшиной почки",
        options: [
            "Экстраперитонеально",
            "Интраперитонеально",
            "Со всех сторон",
            "Ретроперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Как покрыта брюшиной тощая кишка",
        options: [
            "Интраперитонеально",
            "С 3-х сторон",
            "Мезоперитонеально",
            "Экстраперитонеально"
        ],
        correctAnswer: 0
    },
    {
        question: "Что выходит из ворот печени",
        options: [
            "Общий печёночный проток, лимфатические сосуды",
            "Печёночная вена, лимфатические сосуды",
            "Воротная вена, лимфатические сосуды",
            "Печёночная артерия, лимфатические сосуды"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие миндалины расположены в носоглотке",
        options: [
            "Глоточная, трубная",
            "Глоточная, небная",
            "Трубная, язычная",
            "Небная, трубная"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие миндалины расположены в ротоглотке",
        options: [
            "Язычная, небная",
            "Глоточная, небная",
            "Язычная, трубная",
            "Глоточная, трубная"
        ],
        correctAnswer: 0
    },
    {
        question: "Слои стенки желудка",
        options: [
            "Слизистая, подслизистая, мышечная, подсерозная, серозная",
            "Слизистая, мышечная, адвентициальная, серозная",
            "Слизистая, мышечная, подсерозная, серозная",
            "Мышечная, подсерозная, серозная"
        ],
        correctAnswer: 0
    },
    {
        question: "Отличие тонкого кишечника от толстого",
        options: [
            "Villi intestinales",
            "Tunica mucosa",
            "Tunica muscularis",
            "Tunica serosa"
        ],
        correctAnswer: 0
    },
    {
        question: "Отличие толстой кишки от тонкой",
        options: [
            "Haustra coli",
            "Plicae circulares",
            "Villi coli",
            "Tunica serosa"
        ],
        correctAnswer: 0
    },
    {
        question: "В толстой кишке имеется",
        options: [
            "Haustra coli",
            "Plicae circulares",
            "Villi intestinales",
            "Tunica adventitia"
        ],
        correctAnswer: 0
    },
    {
        question: "Каков вес печени у взрослого",
        options: [
            "1500 г",
            "950 г",
            "1200 г",
            "110 г"
        ],
        correctAnswer: 0
    },
    {
        question: "Слои стенки желчного пузыря",
        options: [
            "Tunica serosa, muscularis, submucosa, mucosa",
            "Tunica adventitia, muscularis, submucosa, mucosa",
            "Tunica adventitia, muscularis, mucosa",
            "Tunica serosa, subserosa, muscularis, mucosa"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы подниматели глотки",
        options: [
            "M. palatopharyngeus, m. stylopharyngeus",
            "M. glossopharyngeus, m. palatopharyngeus",
            "M. stylopharyngeus, m. palatoglossus",
            "M. palatoglossus, m. palatopharyngeus"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы сжиматели глотки",
        options: [
            "M. constrictor pharyngeus superior, medius et inferior",
            "M. constrictor pharyngis superior, media, m. palatopharyngeus",
            "M. constrictor pharyngis, m. glossopharyngeus, m. palatopharyngeus",
            "M. stylopharyngeus, m. palatopharyngeus"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие части различают в носовой полости",
        options: [
            "Обонятельную и дыхательную",
            "Хрящевую и костную",
            "Наружную и внутреннюю",
            "Слизистую и кожную"
        ],
        correctAnswer: 0
    },
    {
        question: "Что образует твёрдый скелет гортани",
        options: [
            "Непарные и парные хрящи",
            "Непарные хрящи",
            "Связки",
            "Хрящи и связки"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие хрящи гортани являются непарными",
        options: [
            "Перстневидный, щитовидный, надгортанник",
            "Черпаловидный, рожковидный и перстневидный",
            "Перстневидный, щитовидный, рожковидный",
            "Надгортанник, щитовидный, рожковидный"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие хрящи гортани являются парными",
        options: [
            "Черпаловидный, рожковидный, клиновидный",
            "Перстневидный, черпаловидный, рожковидный",
            "Черпаловидный, щитовидный, клиновидный",
            "Рожковидный, надгортанник, черпаловидный"
        ],
        correctAnswer: 0
    },
    {
        question: "Где располагается гортань взрослого человека",
        options: [
            "На уровне IV–VI шейных позвонков",
            "На уровне II–V шейных позвонков",
            "На уровне IV–VII шейных позвонков",
            "На уровне V–VII шейных позвонков"
        ],
        correctAnswer: 0
    },
    {
        question: "На какие группы делятся мышцы гортани по функции",
        options: [
            "Мышцы суживатели, расширители голосовой щели и натягиватели голосовых связок",
            "Подниматели гортани, суживатели и расширители",
            "Мышцы опускающие гортань, суживающие и расширяющие",
            "Мышцы расслабляющие голосовую связку, суживатели и расширители"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких частей состоит полость гортани",
        options: [
            "Vestibulum laryngis, rima glottidis, cavum infraglotticum",
            "Aditus laryngis, vestibulum laryngis, cavum infraglotticum",
            "Aditus laryngis, rima glottidis, cavum infraglotticum",
            "Rima glottidis, ventriculi laryngis, cavum infraglotticum"
        ],
        correctAnswer: 0
    },
    {
        question: "Где располагается голосовая щель",
        options: [
            "Между plicae vocales",
            "Между plicae vestibulares",
            "Между plica vocalis et plica vestibularis",
            "Между m. vocalis et plica vocalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Длина трахеи",
        options: [
            "9–11 см",
            "8–10 см",
            "10–13 см",
            "11–14 см"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем соединяются между собой хрящи трахеи",
        options: [
            "Ligamenta anularia",
            "Мышцами",
            "Слизистой оболочкой",
            "Соединительной тканью"
        ],
        correctAnswer: 0
    },
    {
        question: "Какую форму имеет лёгкое",
        options: [
            "Конусовидную",
            "Трапециевидную",
            "Ромбовидную",
            "Продольную"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие доли различают в правом лёгком",
        options: [
            "Верхнюю, среднюю, нижнюю",
            "Медиальную, латеральную",
            "Переднюю, заднюю и нижнюю",
            "Верхнюю, переднюю, заднюю"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие поверхности различают на лёгком",
        options: [
            "Facies diaphragmatica, costalis, medialis",
            "Facies diaphragmatica, medialis, anterior",
            "Facies costalis, medialis, inferior",
            "Facies costalis, medialis, lateralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие образования располагаются в воротах лёгких",
        options: [
            "Бронхи, лёгочная артерия и вена, нервы, лимфатические сосуды",
            "Лёгочная вена, нервы, артерии, лимфатические сосуды",
            "Лёгочная артерия, бронхи, вены",
            "Бронхи, лёгочная вена, нервы, лимфатические сосуды"
        ],
        correctAnswer: 0
    },
    {
        question: "Что является функционально-структурной единицей лёгкого",
        options: [
            "Ацинус",
            "Долька",
            "Сегмент",
            "Доля"
        ],
        correctAnswer: 0
    },
    {
        question: "Что такое плевра",
        options: [
            "Серозная оболочка",
            "Слизистая оболочка",
            "Соединительная оболочка",
            "Мышечная оболочка"
        ],
        correctAnswer: 0
    },
    {
        question: "Части париетальной плевры",
        options: [
            "Pleura mediastinalis, costalis, diaphragmatica",
            "Pleura mediastinalis, sternalis, inferior",
            "Pleura anterior, costalis, inferior",
            "Pleura costalis, sternalis, diaphragmatica"
        ],
        correctAnswer: 0
    },
    {
        question: "Что имеется между париетальной и висцеральной плеврой",
        options: [
            "Плевральная полость",
            "Плевральные сосуды",
            "Плевральное углубление",
            "Плевральные карманы"
        ],
        correctAnswer: 0
    },
    {
        question: "Что входит в ворота лёгкого",
        options: [
            "Бронхи, лёгочная артерия, нервы",
            "Лёгочная вена, бронхи, нервы",
            "Лёгочная артерия, бронхи, лимфатические сосуды",
            "Бронхи, лёгочная вена, бронхиальная артерия"
        ],
        correctAnswer: 0
    },
    {
        question: "Что выходит из ворот лёгкого",
        options: [
            "Лёгочная вена, лимфатические сосуды",
            "Лёгочная вена, нервы",
            "Бронхи, лимфатические сосуды",
            "Лёгочная артерия, лимфатические сосуды"
        ],
        correctAnswer: 0
    },
    {
        question: "Что относится к верхним дыхательным путям",
        options: [
            "Полость носа, носовая и ротовая части глотки",
            "Полость носа, носоглотка",
            "Полость носа, гортаноглотка",
            "Наружный нос, полость носа и глотка"
        ],
        correctAnswer: 0
    },
    {
        question: "Что относится к нижним дыхательным путям",
        options: [
            "Гортань, трахея, бронхи",
            "Глотка, гортань, трахея",
            "Трахея, бронхи, альвеолы",
            "Бронхиальное дерево, альвеолярные ходы"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем образованы ацинусы",
        options: [
            "Респираторными бронхиолами, альвеолярными ходами, альвеолярными мешочками и альвеолами",
            "Альвеолярными мешочками и альвеолами",
            "Терминальными и респираторными бронхиолами",
            "Сегментарными бронхами и альвеолами"
        ],
        correctAnswer: 0
    },
    {
        question: "В стенках каких бронхов отсутствуют хрящи",
        options: [
            "Bronchus terminalis",
            "Bronchus principalis",
            "Bronchus lobularis",
            "Bronchus segmentalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем отличается правый главный бронх от левого",
        options: [
            "Шире и расположен более вертикально",
            "Длиннее и уже",
            "Длиннее и расположен вертикально",
            "Шире и расположен горизонтально"
        ],
        correctAnswer: 0
    },
    {
        question: "К каким мышцам относятся мышцы гортани",
        options: [
            "К поперечнополосатым",
            "К гладким",
            "К производным мезенхимы",
            "К производным эктодермы"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы суживатели голосовой щели",
        options: [
            "M. cricoarytenoideus lateralis, m. arytenoideus transversus",
            "M. cricoarytenoideus transversus, m. thyroepiglotticus",
            "M. thyroarytenoideus, m. vocalis",
            "M. arytenoideus obliquus, m. thyroepiglotticus"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы расширители голосовой щели",
        options: [
            "M. cricoarytenoideus posterior",
            "M. cricothyroidea",
            "M. arytenoideus obliquus",
            "M. arytenoideus transversus"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы натягивающие голосовые связки",
        options: [
            "M. cricothyroideus",
            "M. cricoarytenoideus posterior",
            "M. arytenoideus obliquus",
            "M. arytenoideus transversus"
        ],
        correctAnswer: 0
    },
    {
        question: "Что является структурно-функциональной единицей почки",
        options: [
            "Нефрон",
            "Сосудистая сеть",
            "Почечные канальцы",
            "Почечное тельце"
        ],
        correctAnswer: 0
    },
    {
        question: "Из чего состоит паренхима почки",
        options: [
            "Cortex et medulla renalis",
            "Из пирамид и чашечек",
            "Medulla et columna renalis",
            "Zona radiata et zona convoluta"
        ],
        correctAnswer: 0
    },
    {
        question: "Укажите оболочки почки",
        options: [
            "Capsula fibrosa, capsula adiposa, fascia renalis",
            "Capsula fibrosa, adiposa, muscularis",
            "Capsula renalis, adiposa, adventitia",
            "Capsula adiposa renalis, epiploica"
        ],
        correctAnswer: 0
    },
    {
        question: "Количество малых чашечек в почке",
        options: [
            "8–9",
            "10–12",
            "6–7",
            "10–15"
        ],
        correctAnswer: 0
    },
    {
        question: "Ёмкость мочевого пузыря взрослого (мл)",
        options: [
            "500–700",
            "300–400",
            "250–300",
            "600–900"
        ],
        correctAnswer: 0
    },
    {
        question: "Анатомические части мочевого пузыря",
        options: [
            "Apex, corpus, fundus, cervix",
            "Corpus, cervix, pars abdominalis",
            "Corpus, fundus, pars pelvina",
            "Corpus, cervix, pars intramuralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Анатомические части мужского мочеиспускательного канала",
        options: [
            "Pars prostatica, pars membranacea, pars spongiosa",
            "Pars prostatica, pars spongiosa, pars anterior",
            "Pars vesicalis, pars spongiosa, pars posterior",
            "Pars spongiosa, pars membranacea, pars superior"
        ],
        correctAnswer: 0
    },
    {
        question: "Где происходит сперматогенез",
        options: [
            "Tubuli seminiferi contorti",
            "Rete testis",
            "Tubuli efferentes",
            "Tubuli seminiferi recti"
        ],
        correctAnswer: 0
    },
    {
        question: "Какой гормон вырабатывают яички",
        options: [
            "Тестостерон",
            "Инсулин",
            "Фолликулин",
            "Тироксин"
        ],
        correctAnswer: 0
    },
    {
        question: "Анатомические части придатка яичка",
        options: [
            "Головка, тело, хвост",
            "Головка, шейка, хвост",
            "Головка, шейка, тело",
            "Тело, хвост"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие части выделяют у семявыносящего протока",
        options: [
            "Pars testicularis, funicularis, inguinalis, pelvina",
            "Pars abdominalis, pelvina, intramuralis",
            "Pars testicularis, inguinalis, pelvina, intramuralis",
            "Pars funicularis, pelvina, abdominalis, vesicalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Куда открывается семявыбрасывающий проток",
        options: [
            "Pars prostatica urethrae",
            "Pars membranacea urethrae",
            "Pars spongiosa urethrae",
            "Pars navicularis"
        ],
        correctAnswer: 0
    },
    {
        question: "Части предстательной железы",
        options: [
            "Lobus dexter, sinister, isthmus prostatae",
            "Lobus dexter, basis, apex prostatae",
            "Lobus sinister, basis, isthmus",
            "Lobus dexter, sinister, apex, isthmus"
        ],
        correctAnswer: 0
    },
    {
        question: "Предстательная железа образована",
        options: [
            "Мышечной и железистой тканью",
            "Соединительной тканью",
            "Мышечными волокнами",
            "Железистой тканью"
        ],
        correctAnswer: 0
    },
    {
        question: "Части шейки матки",
        options: [
            "Влагалищная и надвлагалищная",
            "Длинная и короткая",
            "Влагалищная и маточная",
            "Наружная и внутренняя"
        ],
        correctAnswer: 0
    },
    {
        question: "Анатомические части матки",
        options: [
            "Дно, тело, шейка, перешеек",
            "Головка, тело, дно",
            "Дно, головка, шейка",
            "Дно, тело, перешеек, головка"
        ],
        correctAnswer: 0
    },
    {
        question: "Слои стенки матки",
        options: [
            "Endometrium, myometrium, perimetrium",
            "Endometrium, parametrium, tunica muscularis",
            "Endometrium, myometrium, parametrium",
            "Endometrium, myometrium, tunica serosa"
        ],
        correctAnswer: 0
    },
    {
        question: "Связки матки",
        options: [
            "Lig. teres uteri, lig. latum uteri",
            "Lig. latum, lig. suspensorium",
            "Lig. latum, lig. ovarium",
            "Lig. teres, lig. uteri proprium"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие гормоны вырабатывают яичники",
        options: [
            "Фолликулин и гормон жёлтого тела",
            "Тестостерон",
            "Паратироидин",
            "Адреналин"
        ],
        correctAnswer: 0
    },
    {
        question: "Связки яичника",
        options: [
            "Lig. ovarii proprium, lig. suspensorium ovarii",
            "Lig. suspensorium et lig. teres ovarii",
            "Lig. latum, lig. ovarii proprium",
            "Lig. latum, lig. teres"
        ],
        correctAnswer: 0
    },
    {
        question: "Части маточной трубы",
        options: [
            "Pars uterina, isthmus, ampulla, infundibulum",
            "Pars uterina, pars pelvina, infundibulum",
            "Pars uterina, collum, infundibulum, ampulla",
            "Pars abdominalis, pars pelvina, ampulla, cervicis"
        ],
        correctAnswer: 0
    },
    {
        question: "Слои стенки маточной трубы",
        options: [
            "Tunica mucosa, muscularis, subserosa, serosa",
            "Tunica mucosa, muscularis, adventitia, serosa",
            "Tunica mucosa, muscularis, submucosa",
            "Tunica mucosa, submucosa, muscularis, adventitia"
        ],
        correctAnswer: 0
    },
    {
        question: "Слои стенки влагалища",
        options: [
            "Tunica mucosa, muscularis, adventitia",
            "Tunica mucosa, submucosa, muscularis",
            "Tunica mucosa, muscularis, serosa",
            "Tunica mucosa, submucosa, adventitia"
        ],
        correctAnswer: 0
    },
    {
        question: "Как называется мышца, поднимающая яичко",
        options: [
            "M. cremaster",
            "M. levator testis",
            "M. depressor testis",
            "M. testis abdominus"
        ],
        correctAnswer: 0
    },
    {
        question: "Сколько оболочек имеет яичко",
        options: [
            "7",
            "5",
            "6",
            "8"
        ],
        correctAnswer: 0
    },
    {
        question: "В ворота почки входит",
        options: [
            "Почечная артерия, нервы",
            "Почечная артерия и вена",
            "Мочеточник, почечная артерия",
            "Почечная артерия и лоханка"
        ],
        correctAnswer: 0
    },
    {
        question: "Из ворот почки выходит",
        options: [
            "Почечная вена, почечная лоханка, лимфатические сосуды",
            "Почечная вена, нервы, лимфатические сосуды",
            "Нервы, почечная вена, лоханка",
            "Почечная артерия, вена, лимфатические сосуды"
        ],
        correctAnswer: 0
    },
    {
        question: "Из чего состоит lobulus corticalis почки",
        options: [
            "Pars radiata, pars convoluta",
            "Pars radiata, pars corticalis",
            "Pars convoluta, papilla renalis",
            "Pyramides renales, pars radiata"
        ],
        correctAnswer: 0
    },
    {
        question: "Что характерно для чудесной сети почки",
        options: [
            "Приносящие и уносящие сосуды — артериолы",
            "Приносящие и уносящие сосуды — венулы",
            "Приносящие венулы, уносящие артериолы",
            "Приносящие артериолы, выносящие венулы"
        ],
        correctAnswer: 0
    },
    {
        question: "Верхний конец левой почки расположен",
        options: [
            "Между XI и XII грудными позвонками",
            "На уровне X грудного позвонка",
            "На уровне XI грудного позвонка",
            "На уровне XII грудного позвонка"
        ],
        correctAnswer: 0
    },
    {
        question: "Верхний конец правой почки расположен",
        options: [
            "На уровне середины тела XII грудного позвонка",
            "На уровне тела XI грудного позвонка",
            "Между XII грудным и I поясничным позвонками",
            "Между XI–XII грудными позвонками"
        ],
        correctAnswer: 0
    },
    {
        question: "Нижний конец правой почки расположен",
        options: [
            "На уровне середины тела III поясничного позвонка",
            "На уровне I поясничного позвонка",
            "На уровне II поясничного позвонка",
            "Между I и II поясничными позвонками"
        ],
        correctAnswer: 0
    },
    {
        question: "Части мочеточника",
        options: [
            "Pars abdominalis, pelvina, intramuralis",
            "Pars thoracica, pars abdominalis, pars pelvina",
            "Pars abdominalis, pelvina, vesicalis",
            "Pars pelvina, sacralis, intramuralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких слоёв состоит стенка мочеточника",
        options: [
            "Tunica mucosa, muscularis, adventitia",
            "Tunica mucosa, submucosa, muscularis",
            "Tunica mucosa, muscularis, serosa",
            "Tunica mucosa, submucosa, adventitia"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем характерен мочепузырный треугольник",
        options: [
            "Отсутствием складок",
            "Отсутствием мышечного слоя",
            "Наличием отверстий",
            "Резко очерченные границы"
        ],
        correctAnswer: 0
    },
    {
        question: "Какая часть мужского мочеиспускательного канала является наиболее суженной",
        options: [
            "Pars membranacea",
            "Pars prostatica",
            "Pars spongiosa",
            "Pars vesicalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Длина мужского мочеиспускательного канала в среднем",
        options: [
            "18 см",
            "10 см",
            "16 см",
            "14 см"
        ],
        correctAnswer: 0
    },
    {
        question: "Куда открывается наружное отверстие женского мочеиспускательного канала",
        options: [
            "В преддверие влагалища",
            "В половую щель",
            "Во влагалище",
            "На клитор"
        ],
        correctAnswer: 0
    },
    {
        question: "К какому типу желез относят яички",
        options: [
            "Смешанные",
            "Эндокринные",
            "Экзокринные",
            "Слизистые"
        ],
        correctAnswer: 0
    },
    {
        question: "На что влияет гормон яичка",
        options: [
            "На вторичные половые признаки",
            "На рост организма",
            "На углеводный обмен",
            "На теплообмен"
        ],
        correctAnswer: 0
    },
    {
        question: "Количество долек в каждом яичке",
        options: [
            "250–300",
            "500",
            "400–500",
            "500–750"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем покрыта паренхима яичка",
        options: [
            "Tunica albuginea",
            "Tunica vaginalis testis",
            "Fascia cremasterica",
            "Fascia spermatica externa"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы мочеполовой диафрагмы",
        options: [
            "M. bulbospongiosus, m. sphincter urethrae",
            "M. levator ani, m. bulbospongiosus",
            "M. sphincter ani externus, m. ischiocavernosus",
            "M. perinei transversus, m. sphincter urethrae"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышца тазовой диафрагмы",
        options: [
            "M. sphincter ani externus",
            "M. bulbospongiosus",
            "M. ischiocavernosus",
            "M. sphincter urethrae"
        ],
        correctAnswer: 0
    },
    {
        question: "Чем образовано почечное тельце",
        options: [
            "Glomerulus et capsula glomeruli",
            "Capsula glomeruli et tubuli renales",
            "Glomerulus et tubuli contorti",
            "Glomerulus et tubuli recti"
        ],
        correctAnswer: 0
    },
    {
        question: "Где образуется первичная моча",
        options: [
            "В почечном тельце",
            "В извитых канальцах",
            "В петле Генле",
            "В соединительной трубочке"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие капиллярные сети образуются в почке",
        options: [
            "Чудесная и простая сеть",
            "Наружная и внутренняя капиллярная сеть",
            "Артериальная и венозная сеть",
            "Чудесная и венозная сеть"
        ],
        correctAnswer: 0
    },
    {
        question: "Размеры женского мочеиспускательного канала",
        options: [
            "Длина 2,5–3,5 см, ширина 7–8 мм",
            "Длина 6 см, ширина 10 мм",
            "Длина 5 см, ширина 11 мм",
            "Длина 3,5 см, ширина 15 мм"
        ],
        correctAnswer: 0
    },
    {
        question: "Чего не имеют позвонки",
        options: [
            "Caput",
            "Arcus",
            "Processus",
            "Incisurae"
        ],
        correctAnswer: 0
    },
    {
        question: "Шейные позвонки отличаются от других позвонков наличием",
        options: [
            "Foramina processus transversalia",
            "Foveae costales",
            "Tuberculum anterior et posterior",
            "Processus accessorius"
        ],
        correctAnswer: 0
    },
    {
        question: "Грудные позвонки отличаются от других позвонков наличием",
        options: [
            "Foveae costales",
            "Tuberculum anterior et posterior",
            "Foramina processus transversalia",
            "Processus accessorius"
        ],
        correctAnswer: 0
    },
    {
        question: "Поясничные позвонки отличаются от других позвонков наличием",
        options: [
            "Processus accessorius, processus mamillaris",
            "Tuberculum anterior et posterior",
            "Foveae costales",
            "Foramina processus transversalia"
        ],
        correctAnswer: 0
    },
    {
        question: "Укажите части, принадлежащие II шейному позвонку",
        options: [
            "Dens",
            "Fovea articularis superior",
            "Fovea costales",
            "Arcus anterior"
        ],
        correctAnswer: 0
    },
    {
        question: "Что отсутствует в грудине",
        options: [
            "Foramen",
            "Corpus",
            "Processus",
            "Manubrium"
        ],
        correctAnswer: 0
    },
    {
        question: "Что отсутствует в ребре",
        options: [
            "Processus",
            "Corpus",
            "Caput",
            "Collum"
        ],
        correctAnswer: 0
    },
    {
        question: "Какова основная функция ключицы",
        options: [
            "Удерживает плечевой сустав на расстоянии от грудной клетки",
            "Составляет основу для верхней конечности",
            "Составляет основу грудной клетки",
            "Участвует в образовании плечевого сустава"
        ],
        correctAnswer: 0
    },
    {
        question: "Что отсутствует в ключице",
        options: [
            "Processus coracoideus",
            "Tuberculum conoideum",
            "Extremitas acromialis",
            "Extremitas sternalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Где располагается на лопатке cavitas glenoidalis",
        options: [
            "Angulus lateralis",
            "Angulus inferior",
            "Angulus superior",
            "Angulus medialis"
        ],
        correctAnswer: 0
    },
    {
        question: "На проксимальном конце плечевой кости расположены",
        options: [
            "Caput humeri, tuberculum majus, crista tuberculi majoris",
            "Epicondylus lateralis, fossa radialis, trochlea",
            "Capitulum humeri, trochlea, crista tuberculi majores",
            "Fossa olecrani, fossa radialis, fossa coronoidea"
        ],
        correctAnswer: 0
    },
    {
        question: "На дистальном конце плечевой кости располагается",
        options: [
            "Trochlea, capitulum humeri",
            "Trochlea, collum anatomicum",
            "Tuberculum minus, capitulum humeri",
            "Fossa olecrani, crista tuberculi minoris"
        ],
        correctAnswer: 0
    },
    {
        question: "На проксимальном конце лучевой кости располагается",
        options: [
            "Caput, circumferentia articularis",
            "Collum, processus styloideus",
            "Caput, processus coronoideus",
            "Circumferentia articularis, trochlea"
        ],
        correctAnswer: 0
    },
    {
        question: "На дистальном конце лучевой кости располагается",
        options: [
            "Processus styloideus, incisura ulnaris",
            "Incisura ulnaris, caput",
            "Incisura radialis, processus styloideus",
            "Incisura radialis, facies articularis carpalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости запястья находятся в его проксимальном ряду",
        options: [
            "Os scaphoideum, os lunatum, os triquetrum, os pisiforme",
            "Os capitatum, os hamatum",
            "Os triquetrum, os trapezium",
            "Os pisiforme, os capitatum"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости запястья в его дистальном ряду",
        options: [
            "Os trapezium, os trapezoideum, os capitatum, os hamatum",
            "Os scaphoideum, os lunatum",
            "Os lunatum, os pisiforme",
            "Os scaphoideum, os hamatum"
        ],
        correctAnswer: 0
    },
    {
        question: "Гребень подвздошной кости спереди заканчивается",
        options: [
            "Spina iliaca anterior superior",
            "Spina iliaca posterior inferior",
            "Spina iliaca posterior superior",
            "Spina ischiadica"
        ],
        correctAnswer: 0
    },
    {
        question: "Гребень подвздошной кости сзади заканчивается",
        options: [
            "Spina iliaca posterior superior",
            "Spina iliaca posterior inferior",
            "Spina iliaca anterior superior",
            "Spina ischiadica"
        ],
        correctAnswer: 0
    },
    {
        question: "Большую и малую седалищные вырезки отделяют друг от друга",
        options: [
            "Spina ischiadica",
            "Spina iliaca anterior superior",
            "Spina iliaca anterior inferior",
            "Spina iliaca posterior superior"
        ],
        correctAnswer: 0
    },
    {
        question: "На проксимальном конце бедренной кости располагается",
        options: [
            "Fossa trochanterica",
            "Facies poplitea",
            "Linea aspera",
            "Facies patellaris"
        ],
        correctAnswer: 0
    },
    {
        question: "На дистальном конце бедренной кости имеется",
        options: [
            "Epicondylus lateralis",
            "Linea intertrochanterica",
            "Caput femoris",
            "Collum femoris"
        ],
        correctAnswer: 0
    },
    {
        question: "В проксимальной части большеберцовой кости располагается",
        options: [
            "Tuberculum intercondylare",
            "Incisura fibularis",
            "Malleolus lateralis",
            "Apex capitis"
        ],
        correctAnswer: 0
    },
    {
        question: "На дистальном конце большеберцовой кости располагается",
        options: [
            "Incisura fibularis",
            "Facies articularis fibularis",
            "Condylus lateralis",
            "Tuberositas tibialis"
        ],
        correctAnswer: 0
    },
    {
        question: "На малоберцовой кости располагается",
        options: [
            "Malleolus lateralis",
            "Malleolus medialis",
            "Condylus lateralis",
            "Condylus medialis"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости располагаются в проксимальном ряду предплюсны",
        options: [
            "Talus, calcaneus",
            "Talus, ossa cuneiformia",
            "Os naviculare, os cuboideum",
            "Ossa cuneiformia"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости располагаются в дистальном ряду предплюсны",
        options: [
            "Os naviculare, ossa cuneiformia, os cuboideum",
            "Os calcaneus, os naviculare",
            "Os calcaneus, os talus",
            "Os capitatum, os hamatum"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие изгибы различают в позвоночнике в норме",
        options: [
            "2 лордоза и 2 кифоза",
            "Кифоз влево",
            "Кифоз вправо",
            "Сколиозы"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие рёбра называются истинными",
        options: [
            "7 верхних, соединяющихся с хрящами грудины",
            "7 верхних, прикрепляющиеся к телу грудины",
            "7 верхних, соединяющихся с грудиной",
            "6 верхних, прикрепляющихся хрящами к грудине"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких частей состоит скелет",
        options: [
            "Череп, скелет туловища, скелет конечностей",
            "Длинные и короткие кости",
            "Длинные, короткие и смешанные кости",
            "Кости, хрящи, связки"
        ],
        correctAnswer: 0
    },
    {
        question: "Укажите основные разновидности костей скелета",
        options: [
            "Трубчатые, плоские, смешанные",
            "Длинные, короткие",
            "Короткие, широкие, длинные",
            "Цилиндрические и плоские"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости относятся к костям туловища",
        options: [
            "Позвонки, рёбра, грудина",
            "Позвонки, рёбра, ключица",
            "Позвонки, рёбра, лопатки",
            "Позвонки, грудина, ключица"
        ],
        correctAnswer: 0
    },
    {
        question: "На какие отделы делится позвоночный столб",
        options: [
            "Шейный, грудной, поясничный, крестцовый, копчиковый",
            "Шейный, грудной, поясничный, крестцовый",
            "Шейный, грудной, крестцовый, копчиковый",
            "Шейный, поясничный, крестцовый"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие части имеет позвонок",
        options: [
            "Corpus, arcus, 7 отростков",
            "Corpus, processus transversus",
            "Corpus, foramen vertebrae",
            "Corpus, arcus"
        ],
        correctAnswer: 0
    },
    {
        question: "Как называется верхняя часть крестца",
        options: [
            "Basis",
            "Apex",
            "Hiatus sacralis",
            "Facies superior"
        ],
        correctAnswer: 0
    },
    {
        question: "Как называется нижняя суженная часть крестца",
        options: [
            "Apex",
            "Facies inferior",
            "Hiatus sacralis",
            "Facies superior"
        ],
        correctAnswer: 0
    },
    {
        question: "Из каких частей состоит грудина",
        options: [
            "Manubrium, corpus, processus xiphoideus",
            "Corpus, caput, extremitas distalis",
            "Corpus, extremitas superior et inferior",
            "Corpus, caput, collum"
        ],
        correctAnswer: 0
    },
    {
        question: "На какие группы делятся рёбра",
        options: [
            "Costae verae, spuriae, fluctuantes",
            "Costae verae, spuriae",
            "Costae superiores, inferiores",
            "Costae prima, secunda, tertia"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости входят в состав плечевого пояса",
        options: [
            "Ключица, лопатка",
            "Грудина, ключица, лопатка",
            "I ребро, ключица, плечо",
            "Грудина, ключица, I ребро"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие кости входят в состав свободной верхней конечности",
        options: [
            "Плечо, предплечье, кисть",
            "Плечо, лопатка, предплечье",
            "Лопатка, плечо",
            "Предплечье, кисть"
        ],
        correctAnswer: 0
    },
    {
        question: "Какую форму имеет лопатка",
        options: [
            "Плоская треугольная",
            "Длинная плоская",
            "Широкая плоская",
            "Плоская четырёхугольная"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие углы имеются у лопатки",
        options: [
            "Angulus superior, inferior, lateralis",
            "Angulus medialis, lateralis, inferior",
            "Angulus medialis, lateralis, superior",
            "Angulus anterior, lateralis, medialis"
        ],
        correctAnswer: 0
    },
    {
        question: "Какие фаланги различают",
        options: [
            "Phalangis proximalis, media, distalis",
            "Phalangis proximalis et media",
            "Phalangis proximalis et distalis",
            "Phalangis inferior et superior"
        ],
        correctAnswer: 0
    },
    {
        question: "Какую форму имеет тело плечевой кости",
        options: [
            "Цилиндрическая",
            "Эллипсоидная",
            "Треугольная",
            "Плоская"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы груди",
        options: [
            "m. pectoralis minor",
            "m. temporalis",
            "m. pterygoideus lateralis",
            "m. sternothyroideus"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы груди",
        options: [
            "m. serratus anterior",
            "m. levator scapulae",
            "m. rhomboideus major",
            "m. temporalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы груди",
        options: [
            "m. transversus thoracis",
            "m. subscapularis",
            "m. temporalis",
            "m. pterygoideus lateralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышца, поднимающая рёбра и участвующая в процессе дыхания",
        options: [
            "mm. intercostales externi",
            "mm. intercostales interni",
            "m. rhomboideus",
            "m. obliquus internus abdominis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышца, опускающая рёбра и участвующая в процессе дыхания",
        options: [
            "mm. intercostales interni",
            "mm. intercostales externi",
            "m. pectoralis major",
            "m. subclavius"
        ],
        correctAnswer: 0
    },
    {
        question: "Что образуется в сухожильном центре диафрагмы",
        options: [
            "foramen venae cavae",
            "trigonum lumbocostale",
            "trigonum sternocostale",
            "hiatus esophageus"
        ],
        correctAnswer: 0
    },
    {
        question: "Что проходит через hiatus aorticus",
        options: [
            "Aorta, ductus thoracicus",
            "Aorta",
            "Esophagus",
            "Vena cava"
        ],
        correctAnswer: 0
    },
    {
        question: "Что проходит через hiatus esophageus",
        options: [
            "Esophagus, n. vagus",
            "n. vagus",
            "Esophagus, ductus lymphaticus",
            "Aorta, ductus thoracicus"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхностные мышцы груди",
        options: [
            "m. serratus anterior",
            "m. subscapularis",
            "m. temporalis",
            "m. pterygoideus lateralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Глубокие мышцы груди",
        options: [
            "m. transversus thoracis",
            "m. subscapularis",
            "m. temporalis",
            "m. pterygoideus lateralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы брюшной стенки",
        options: [
            "m. rectus abdominis, m. pyramidalis",
            "m. teres major",
            "m. levator scapulae",
            "m. temporalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Длина пахового канала",
        options: [
            "4–5 см",
            "3 см",
            "6 см",
            "1–2 см"
        ],
        correctAnswer: 0
    },
    {
        question: "Что проходит через паховый канал у мужчин",
        options: [
            "funiculus spermaticus",
            "lig. teres uteri",
            "v. spermatica",
            "a. uteri"
        ],
        correctAnswer: 0
    },
    {
        question: "Что проходит через паховый канал у женщин",
        options: [
            "lig. teres uteri",
            "funiculus spermaticus",
            "v. spermatica",
            "a. uteri"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышца задней стенки живота",
        options: [
            "m. quadratus lumborum",
            "m. rectus abdominis",
            "m. pyramidalis",
            "m. teres major"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы брюшной стенки",
        options: [
            "m. transversus abdominis, m. rectus abdominis",
            "m. teres major",
            "m. levator veli palatini",
            "m. levator scapulae"
        ],
        correctAnswer: 0
    },
    {
        question: "В состав m. erector spinae входит",
        options: [
            "m. iliocostalis, m. longissimus, m. spinalis",
            "m. iliocostalis, m. rectus capitis posterior major",
            "m. spinalis, m. obliquus capitis inferior",
            "m. transversospinalis, m. rotatores"
        ],
        correctAnswer: 0
    },
    {
        question: "В состав m. transversospinalis входит",
        options: [
            "m. semispinalis, mm. rotatores, mm. multifidi",
            "mm. multifidi, m. iliocostalis",
            "m. rectus capitis posterior major, m. spinalis",
            "m. longissimus, m. iliocostalis, mm. rotatores"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы спины",
        options: [
            "m. trapezius",
            "m. pyramidalis",
            "m. pectoralis minor",
            "m. gemellus superior"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхностные мышцы спины",
        options: [
            "m. trapezius",
            "m. splenius cervicis et capitis",
            "m. erector spinae",
            "m. longissimus"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхностные мышцы спины",
        options: [
            "m. latissimus dorsi",
            "m. splenius cervicis et capitis",
            "m. erector spinae",
            "m. longissimus"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхностные мышцы спины",
        options: [
            "m. levator scapulae",
            "m. splenius cervicis et capitis",
            "m. erector spinae",
            "m. longissimus"
        ],
        correctAnswer: 0
    },
    {
        question: "Глубокие мышцы спины",
        options: [
            "mm. multifidi",
            "m. trapezius",
            "m. latissimus dorsi",
            "m. rhomboideus"
        ],
        correctAnswer: 0
    },
    {
        question: "Поверхностные мышцы спины",
        options: [
            "m. trapezius",
            "m. serratus posterior",
            "m. splenius cervicis et capitis",
            "m. erector spinae"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы плечевого пояса",
        options: [
            "m. teres major",
            "m. biceps brachii",
            "m. buccalis",
            "m. temporalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы плечевого пояса",
        options: [
            "m. subscapularis",
            "m. biceps brachii",
            "m. buccalis",
            "m. temporalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы плечевого пояса",
        options: [
            "m. teres major",
            "m. biceps brachii",
            "m. buccalis",
            "m. temporalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Передняя группа мышц плеча",
        options: [
            "m. coracobrachialis",
            "m. anconeus",
            "m. pronator teres",
            "m. palmaris longus"
        ],
        correctAnswer: 0
    },
    {
        question: "Задняя группа мышц плеча",
        options: [
            "m. anconeus",
            "m. biceps brachii",
            "m. deltoideus",
            "m. coracobrachialis"
        ],
        correctAnswer: 0
    },
    {
        question: "Передняя глубокая группа мышц предплечья",
        options: [
            "m. pronator quadratus",
            "m. pronator teres",
            "m. brachioradialis",
            "m. extensor carpi ulnaris"
        ],
        correctAnswer: 0
    },
    {
        question: "Задняя глубокая группа мышц предплечья",
        options: [
            "m. supinator",
            "m. brachioradialis",
            "m. extensor carpi ulnaris",
            "m. flexor carpi ulnaris"
        ],
        correctAnswer: 0
    },
    {
        question: "Внутренняя группа мышц таза",
        options: [
            "m. psoas minor",
            "m. gluteus maximus",
            "m. gluteus minimus",
            "m. gemellus inferior"
        ],
        correctAnswer: 0
    },
    {
        question: "Внутренняя группа мышц таза",
        options: [
            "m. iliacus",
            "m. gluteus maximus",
            "m. gluteus minimus",
            "m. lumbricalis"
        ],
        correctAnswer: 0
    },
    {
        question: "Наружная группа мышц таза",
        options: [
            "m. gluteus minimus",
            "m. coxae extensor",
            "m. iliopsoas",
            "m. psoas minor"
        ],
        correctAnswer: 0
    },
    {
        question: "Наружная группа мышц таза",
        options: [
            "m. tensor fasciae latae, m. gluteus minimus",
            "m. gluteus medius, m. coxae extensor",
            "m. piriformis, m. iliopsoas",
            "m. psoas minor, m. iliopsoas"
        ],
        correctAnswer: 0
    },
    {
        question: "Наружная группа мышц таза",
        options: [
            "m. quadratus femoris, m. gemellus inferior",
            "m. gluteus medius, m. coxae extensor",
            "m. piriformis, m. iliopsoas",
            "m. psoas minor, m. iliopsoas"
        ],
        correctAnswer: 0
    },
    {
        question: "Медиальная группа мышц бедра",
        options: [
            "m. pectineus",
            "m. semitendinosus",
            "m. semimembranosus",
            "m. biceps femoris"
        ],
        correctAnswer: 0
    },
    {
        question: "Медиальная группа мышц бедра",
        options: [
            "m. adductor longus",
            "m. semitendinosus",
            "m. semimembranosus",
            "m. vastus lateralis"
        ],
        correctAnswer: 0
    },
    {
        question: "Задняя группа мышц бедра",
        options: [
            "m. semitendinosus",
            "m. pectineus",
            "m. adductor longus",
            "m. adductor brevis"
        ],
        correctAnswer: 0
    },
    {
        question: "Мышцы, поднимающие рёбра и участвующие в процессе вдоха",
        options: [
            "mm. intercostales externi",
            "mm. intercostales interni",
            "m. pectoralis major",
            "m. subclavius"
        ],
        correctAnswer: 0
    }
];

// Состояние приложения
const state = {
    currentScreen: 'main',
    currentQuestionIndex: 0,
    selectedQuestions: [],
    userAnswers: [],
    testStartTime: null,
    testTimer: null,
    questionTimer: null,
    timeLeft: 30,
    totalTestTime: 0,
    stats: {
        bestScore: 0,
        bestTime: 0,
        lastScore: 0,
        history: []
    }
};

// DOM элементы
const screens = {
    main: document.getElementById('mainScreen'),
    test: document.getElementById('testScreen'),
    results: document.getElementById('resultsScreen'),
    history: document.getElementById('historyScreen')
};

// Кнопки
const startTestBtn = document.getElementById('startTestBtn');
const historyBtn = document.getElementById('historyBtn');
const testHomeBtn = document.getElementById('testHomeBtn');
const backToMainBtn = document.getElementById('backToMainBtn');
const restartTestBtn = document.getElementById('restartTestBtn');
const backFromHistoryBtn = document.getElementById('backFromHistoryBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const confirmExitBtn = document.getElementById('confirmExitBtn');
const cancelExitBtn = document.getElementById('cancelExitBtn');

// Модальные окна
const confirmationModal = document.getElementById('confirmationModal');

// Элементы статистики
const bestScoreEl = document.getElementById('bestScore');
const lastScoreEl = document.getElementById('lastScore');
const bestTimeEl = document.getElementById('bestTime');
const emptyHistoryMessage = document.getElementById('emptyHistoryMessage');

// Элементы теста
const questionTextEl = document.getElementById('questionText');
const optionsContainerEl = document.getElementById('optionsContainer');
const currentQuestionNumberEl = document.getElementById('currentQuestionNumber');
const timerEl = document.getElementById('timer');
const timerContainer = document.getElementById('timerContainer');
const progressFillEl = document.getElementById('progressFill');
const progressPercentEl = document.getElementById('progressPercent');

// Элементы результатов
const finalScoreEl = document.getElementById('finalScore');
const correctAnswersEl = document.getElementById('correctAnswers');
const wrongAnswersEl = document.getElementById('wrongAnswers');
const timeSpentEl = document.getElementById('timeSpent');
const percentageEl = document.getElementById('percentage');
const resultCommentEl = document.getElementById('resultComment');

// Элементы истории
const historyContainerEl = document.getElementById('historyContainer');

// Функция для перемешивания массива
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Функция для перемешивания вариантов ответов и нахождения нового индекса правильного ответа
function shuffleQuestionOptions(question) {
    // Создаем массив объектов с вариантами и их исходными индексами
    const optionsWithIndices = question.options.map((option, index) => ({
        text: option,
        originalIndex: index
    }));
    
    // Перемешиваем варианты
    const shuffledOptionsWithIndices = shuffleArray(optionsWithIndices);
    
    // Находим новый индекс правильного ответа
    const newCorrectIndex = shuffledOptionsWithIndices.findIndex(
        item => item.originalIndex === question.correctAnswer
    );
    
    // Создаем новый объект вопроса с перемешанными вариантами
    return {
        question: question.question,
        options: shuffledOptionsWithIndices.map(item => item.text),
        correctAnswer: newCorrectIndex
    };
}

// Инициализация приложения
function init() {
    loadStats();
    updateStatsDisplay();
    setupEventListeners();
}

// Загрузка статистики из localStorage
function loadStats() {
    const savedStats = localStorage.getItem('anatomyTestStats');
    if (savedStats) {
        const parsed = JSON.parse(savedStats);
        state.stats = {
            bestScore: parsed.bestScore || 0,
            bestTime: parsed.bestTime || 0,
            lastScore: parsed.lastScore || 0,
            history: parsed.history || []
        };
    }
}

// Сохранение статистики в localStorage
function saveStats() {
    localStorage.setItem('anatomyTestStats', JSON.stringify(state.stats));
}

// Обновление отображения статистики
function updateStatsDisplay() {
    bestScoreEl.textContent = `${state.stats.bestScore}/30`;
    lastScoreEl.textContent = `${state.stats.lastScore}/30`;
    
    if (state.stats.bestTime === 0) {
        bestTimeEl.textContent = "0 сек";
    } else {
        const minutes = Math.floor(state.stats.bestTime / 60);
        const seconds = state.stats.bestTime % 60;
        if (minutes > 0) {
            bestTimeEl.textContent = `${minutes} мин ${seconds} сек`;
        } else {
            bestTimeEl.textContent = `${seconds} сек`;
        }
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    startTestBtn.addEventListener('click', startTest);
    historyBtn.addEventListener('click', showHistory);
    testHomeBtn.addEventListener('click', showExitConfirmation);
    backToMainBtn.addEventListener('click', () => switchScreen('main'));
    restartTestBtn.addEventListener('click', startTest);
    backFromHistoryBtn.addEventListener('click', () => switchScreen('main'));
    clearHistoryBtn.addEventListener('click', clearHistory);
    confirmExitBtn.addEventListener('click', exitTest);
    cancelExitBtn.addEventListener('click', hideExitConfirmation);
    
    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            hideExitConfirmation();
        }
    });
}

// Переключение экранов
function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    screens[screenName].classList.add('active');
    state.currentScreen = screenName;
    
    if (screenName === 'history') {
        showHistory();
    }
}

// Начать новый тест
function startTest() {
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.testStartTime = Date.now();
    state.totalTestTime = 0;
    state.timeLeft = 30;
    
    selectRandomQuestions();
    loadQuestion();
    switchScreen('test');
    startQuestionTimer();
    updateProgress();
}

// Выбрать 30 случайных вопросов
function selectRandomQuestions() {
    const shuffled = [...allAnatomyQuestions].sort(() => 0.5 - Math.random());
    state.selectedQuestions = shuffled.slice(0, 30);
    
    // Перемешиваем варианты ответов для каждого выбранного вопроса
    state.selectedQuestions = state.selectedQuestions.map(question => 
        shuffleQuestionOptions(question)
    );
}

// Загрузить текущий вопрос
function loadQuestion() {
    if (state.currentQuestionIndex >= state.selectedQuestions.length) {
        finishTest();
        return;
    }
    
    const question = state.selectedQuestions[state.currentQuestionIndex];
    questionTextEl.textContent = question.question;
    currentQuestionNumberEl.textContent = state.currentQuestionIndex + 1;
    
    optionsContainerEl.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainerEl.appendChild(optionElement);
    });
    
    state.timeLeft = 30;
    timerEl.textContent = state.timeLeft;
    timerContainer.classList.remove('low-time');
}

// Запустить таймер для текущего вопроса
function startQuestionTimer() {
    clearInterval(state.questionTimer);
    
    state.questionTimer = setInterval(() => {
        state.timeLeft--;
        timerEl.textContent = state.timeLeft;
        
        if (state.timeLeft <= 10) {
            timerContainer.classList.add('low-time');
        }
        
        if (state.timeLeft <= 0) {
            clearInterval(state.questionTimer);
            selectAnswer(-1);
        }
    }, 1000);
}

// Обработка выбора ответа
function selectAnswer(answerIndex) {
    clearInterval(state.questionTimer);
    timerContainer.classList.remove('low-time');
    
    const question = state.selectedQuestions[state.currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;
    
    state.userAnswers.push({
        questionIndex: state.currentQuestionIndex,
        answerIndex: answerIndex,
        isCorrect: isCorrect,
        timeSpent: 30 - state.timeLeft
    });
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    const correctOption = options[question.correctAnswer];
    if (correctOption) {
        correctOption.classList.add('correct');
    }
    
    if (answerIndex !== -1 && answerIndex !== question.correctAnswer) {
        const wrongOption = options[answerIndex];
        if (wrongOption) {
            wrongOption.classList.add('wrong');
        }
    }
    
    setTimeout(() => {
        state.currentQuestionIndex++;
        updateProgress();
        
        if (state.currentQuestionIndex < state.selectedQuestions.length) {
            loadQuestion();
            startQuestionTimer();
        } else {
            finishTest();
        }
    }, 2000);
}

// Обновить прогресс-бар
function updateProgress() {
    const progress = (state.currentQuestionIndex / state.selectedQuestions.length) * 100;
    progressFillEl.style.width = `${progress}%`;
    progressPercentEl.textContent = `${Math.round(progress)}%`;
}

// Завершить тест и показать результаты
function finishTest() {
    state.totalTestTime = Math.floor((Date.now() - state.testStartTime) / 1000);
    
    const correctCount = state.userAnswers.filter(answer => answer.isCorrect).length;
    const score = correctCount;
    const percentage = Math.round((score / 30) * 100);
    
    if (score > state.stats.bestScore) {
        state.stats.bestScore = score;
    }
    
    state.stats.lastScore = score;
    
    if (state.stats.bestTime === 0 || state.totalTestTime < state.stats.bestTime) {
        state.stats.bestTime = state.totalTestTime;
    }
    
    const historyEntry = {
        date: new Date().toLocaleString('ru-RU'),
        score: score,
        time: state.totalTestTime,
        correctAnswers: correctCount,
        totalQuestions: 30,
        percentage: percentage
    };
    
    state.stats.history.unshift(historyEntry);
    
    if (state.stats.history.length > 20) {
        state.stats.history = state.stats.history.slice(0, 20);
    }
    
    saveStats();
    updateStatsDisplay();
    displayResults(score, correctCount, percentage);
    switchScreen('results');
}

// Отобразить результаты теста
function displayResults(score, correctCount, percentage) {
    finalScoreEl.textContent = `${score}/30`;
    correctAnswersEl.textContent = correctCount;
    wrongAnswersEl.textContent = 30 - correctCount;
    percentageEl.textContent = `${percentage}%`;
    
    const minutes = Math.floor(state.totalTestTime / 60);
    const seconds = state.totalTestTime % 60;
    if (minutes > 0) {
        timeSpentEl.textContent = `${minutes} мин ${seconds} сек`;
    } else {
        timeSpentEl.textContent = `${seconds} секунд`;
    }
    
    let comment = "";
    if (score < 12) {
        comment = "Нужно больше практики! Повторите основные разделы анатомии.";
    } else if (score >= 12 && score <= 18) {
        comment = "Хороший результат! Есть над чем поработать.";
    } else if (score >= 19 && score <= 24) {
        comment = "Отлично! Вы хорошо знаете анатомию человека.";
    } else if (score >= 25 && score <= 28) {
        comment = "Превосходно! Отличные знания по анатомии.";
    } else if (score === 29) {
        comment = "Почти идеально! Вы почти эксперт в анатомии!";
    } else if (score === 30) {
        comment = "Идеально! Вы настоящий эксперт в анатомии человека!";
    }
    
    resultCommentEl.textContent = comment;
}

// Показать экран истории
function showHistory() {
    switchScreen('history');
    
    historyContainerEl.innerHTML = '';
    
    if (state.stats.history.length === 0) {
        emptyHistoryMessage.style.display = 'block';
        return;
    }
    
    emptyHistoryMessage.style.display = 'none';
    
    state.stats.history.forEach((attempt, index) => {
        const minutes = Math.floor(attempt.time / 60);
        const seconds = attempt.time % 60;
        const timeText = minutes > 0 ? 
            `${minutes} мин ${seconds} сек` : 
            `${seconds} сек`;
        
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-info">
                <div class="history-date">${attempt.date}</div>
                <div class="history-time">${timeText} • ${attempt.percentage}% правильных</div>
            </div>
            <div class="history-score">${attempt.score}/30</div>
        `;
        
        historyContainerEl.appendChild(historyItem);
    });
}

// Очистить историю
function clearHistory() {
    if (confirm("Вы действительно хотите очистить всю историю тестов?")) {
        state.stats.history = [];
        saveStats();
        showHistory();
    }
}

// Показать модальное окно подтверждения выхода
function showExitConfirmation() {
    confirmationModal.classList.add('active');
}

// Скрыть модальное окно подтверждения выхода
function hideExitConfirmation() {
    confirmationModal.classList.remove('active');
}

// Выйти из теста и вернуться на главный экран
function exitTest() {
    hideExitConfirmation();
    clearInterval(state.questionTimer);
    clearInterval(state.testTimer);
    switchScreen('main');
}

// Инициализировать приложение при загрузке страницы
document.addEventListener('DOMContentLoaded', init);