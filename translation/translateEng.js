const langArr = {

    "main": {
        "ru": "Главная",
        "en": 'Main',
    },
    "countries": {
        'ru': "Страны",
        'en': "Сountries"
    },
    "description__intro__1": {
        'ru': 'Традиционный Завтрак',
        'en': 'Traditional breakfast',
    },
    "description__intro__2": {
        'ru': 'Английский пирог',
        'en': 'Shepsherd pie',
    },
    "description__intro__3": {
        'ru': 'рыба с картошкой',
        'en': 'fish with chips',
    },
    "contacts": {
        "ru": "Контакты",
        "en": "Сontacts",
    },
    "container__intro": {
        "ru": "Ассортимент",
        "en": "Assortiment",
    },
    "description__txt__1": {
        "ru": "Количество ингредиентов в этом блюде откровенно зашкаливает: яичница, бекон, сосиска, черный пуддинг (нет, это не десерт, а кровяная колбаса), фасоль в томатном соусе, жареные грибы и томаты, а также тосты. Запивают это все кофе или черным чаем (конечно же, с молоком), ну а если ты каким-то образом не наелся(-ась), можешь дополнительно заказать еще овсяночки.",
        "en": "The number of ingredients in this dish frankly rolls over: scrambled eggs, bacon, sausage, black pudding (no, this is not a dessert, but black pudding), beans in tomato sauce, fried mushrooms and tomatoes, as well as toast. They wash it all down with coffee or black tea (of course, with milk), but if you somehow didn’t eat enough, you can additionally order more oatmeal.",
    },
    "description__txt__2": {
        "ru": "Несмотря на свое название, с пирогом у этих блюд мало общего. Если вкратце, пастуший пирог – это фарш ягненка под толстое пюре, что скорее похоже на запеканку. Приготовление этих блюд довольно простое – жаришь фарш с луком и морковью, делаешь пюре, накрываешь фарш толщиной пюре и ставишь получившийся «пирог» в духовку на час, пока на картофеле не появится хрустящая корочка. В Британии заболевание появилось в конце XVIII века. А если не ешь мясо, можешь заменить его соей или тофу.",
        "en": "Despite their name, these dishes have little in common with pie. In short, shepherd's pie is minced lamb with a thick mash, which is more like a casserole. The preparation of these dishes is quite simple - fry the minced meat with onions and carrots, make a puree, cover the minced meat with a thick puree and put the resulting “pie” in the oven for an hour until a crisp appears on the potatoes. In Britain, the disease appeared at the end of the 18th century. And if you don't eat meat, you can replace it with soy or tofu.",
    },
    "description__txt__3": {
        "ru": "Без этого блюда просто невозможно себе представить Соединенное Королевство. Дуэт рыбы и картофеля фри появился предположительно в XIX веке, и по сей день туристы со всего мира и сами англичане обожают это блюдо. Рыбой чаще всего выступает треска, а картофель представляет собой что-то среднее между фри и картофелем по-деревенски. Не переживай, костей в рыбе нет совсем, и порции довольно большие. ",
        "en": "Without this dish, it is simply impossible to imagine the United Kingdom. The duo of fish and french fries appeared supposedly in the 19th century, and to this day tourists from all over the world and the British themselves adore this dish. Cod is the most common fish, while potatoes are a cross between french fries and rustic potatoes. Don't worry, there are no bones in the fish at all, and the portions are quite large.",
    },
    "creators": {
        "ru": 'Создатели',
        "en": "Creators",
    },
    "bcontact": {
        "ru": 'Связаться с нами',
        "en": "Contact us",
    },
    "bjoin": {
        "ru": 'Присоединиться',
        "en": 'Join us'
    },
    "search": {
        'ru': 'Поиск',
        "en": "Seacrh",
    }
}
const select = document.querySelector('select');
const allLang = ['en', 'ru'];



select.addEventListener('change', changeURLLanguage);


function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}
changeLanguage();