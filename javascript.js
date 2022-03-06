const burger = document.querySelector('.burger')
const list = document.querySelector('.burger__list')
const fir = document.querySelector('.fir')
const sec = document.querySelector('.sec')
const thi = document.querySelector('.thi')
burger.addEventListener('click', function() {
    fir.classList.toggle('active')
    sec.classList.toggle('active')
    thi.classList.toggle('active')
    list.classList.toggle('active')

})
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
        'ru': 'Борщ',
        'en': 'Borch',
    },
    "description__intro__2": {
        'ru': 'Блины',
        'en': 'Pancakes',
    },
    "description__intro__3": {
        'ru': 'Пельмени',
        'en': 'Pelmeni',
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
        "ru": "Мясо для бульона — 400-450 Грамм (говядина, свинина, курица) Картофель — 4 Штуки Луковица — 1 Штука Морковь — 1 Штука Свекла — 3 Штуки Капуста — 1/3-1/2 Штуки Чеснок — 2-3 Зубчиков Томатная паста — 2 Ст. ложки Уксус — 1 Ст. ложка Соль, перец, растительное масло — По вкусу Вода — 3-4 Литров",
        "en": "Meat for broth - 400-450 Grams (beef, pork, chicken) Potato - 4 Pieces Onion - 1 Piece Carrot - 1 Piece Beetroot - 3 Pieces Cabbage - 1/3-1/2 Pieces Garlic - 2-3 Cloves Tomato paste - 2 Art. tablespoons Vinegar - 1 tbsp. spoon Salt, pepper, vegetable oil - to taste Water - 3-4 liters",
    },
    "description__txt__2": {
        "ru": "Подогреть 3 стакана молока и растворить в нем дрожжи. Добавить 0,5 столовой ложки сахара-песка, соль, желтки, растопленное сливочное масло. Перемешать. Добавить 300 г муки. Замесить тесто. Накрыть его полотенцем. На 2 часа поставить в теплое место для брожения. Когда тесто подойдет, развести его оставленным подогретым молоком. Добавить остальную муку и сахар. Взбить белок и постепенно влить его в тесто. Снова замесить тесто и дать ему подойти. Разогреть сковороду. Во время выпечки перемешивать тесто нельзя. Обжарить блин с обеих сторон до золотистого цвета.",
        "en": "Heat 3 cups of milk and dissolve the yeast in it. Add 0.5 tablespoon of granulated sugar, salt, egg yolks, melted butter. Mix. Add 300 g flour. Knead the dough. Cover it with a towel. Put in a warm place for fermentation for 2 hours. When the dough rises, dilute it with the remaining warmed milk. Add the rest of the flour and sugar. Beat the protein and gradually pour it into the dough. Knead the dough again and let it rise. Heat up the pan. Do not stir the dough during baking. Fry the pancake on both sides until golden brown.",
    },
    "description__txt__3": {
        "ru": "Мука пшеничная просеянная - 500 г + для работы с тестом Вода горячая (70-75 градусов) - 250 мл Яйцо (небольшое) - 1 шт. Соль - 1 ч. ложка без горки Масло растительное без запаха - 25 мл * Для начинки: Мясо (говядина и свинина) - 550 г Лук репчатый - 200 г Сало (по желанию, если мясо постное) - 30 г Вода - 70-80 г (по консистенции фарша) Соль - 1 ч. ложка без горки Перец чёрный молотый - по вкусу * Для варки: Лист лавровый - по вкусу Соль - по вкусу Перец чёрный горошком - по вкусу Лук репчатый - 1/4 шт. * Для подачи: Масло сливочное - по вкусу",
        "en": "Sifted wheat flour - 500 g + for working with dough Hot water (70-75 degrees) - 250 ml Egg (small) - 1 pc. Salt - 1 teaspoon without a slide Vegetable oil, odorless - 25 ml * For the filling: Meat (beef and pork) - 550 g Onion - 200 g Fat (optional, if the meat is lean) - 30 g Water - 70-80 g (according to minced meat consistency) Salt - 1 teaspoon without a slide Ground black pepper - to taste * For cooking: Bay leaf - to taste Salt - to taste Black peppercorns - to taste Bulb onion - 1/4 pcs. * For serving: Butter - to taste",
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


/*slider*/
const button = document.querySelector('.btn__')
const button_back = document.querySelector('.btn__back')
const slider = document.querySelector('.slider')
const slider_line = document.querySelector('.slider__line')
const arr_photo = document.querySelectorAll('.slider .slider__line img')
let counter = 0;
let width;
document.getElementById('foodname').innerHTML = 'Borch'

function init() {
    console.log('reseize')
    width = document.querySelector('.slider').offsetWidth
    console.log(width)
    slider_line.style.width = width * arr_photo.length + 'px'
    arr_photo.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto'
    })
    go()
    console.log(slider_line.offsetWidth)
}
window.addEventListener('resize', init)
init()
button.addEventListener('click', move)
button_back.addEventListener('click', moveback)

function move() {
    counter++;
    if (counter == arr_photo.length) {
        counter = 0;
    }
    go();
    ChangeName()

}

function moveback() {
    counter--;
    if (counter < 0) {
        counter = arr_photo.length - 1;
    }
    go()
    ChangeName()
}


function go() {
    slider_line.style.transform = 'translate(-' + counter * width + 'px'
}

function gobak() {
    slider_line.style.transform = 'translate(+' + counter * width + 'px'
}

function ChangeName() {
    let food = document.querySelector('.btn__foodname')
    let name = document.createElement('a')
    let namecounter = 0;
    name.style.color = "white"
    if (select.value == 'en') {
        if (counter == 0) {
            name = "Borch"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Bliny"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Pelmeni"
            food.replaceChildren(name)
        }
    }
    if (select.value == 'ru') {
        if (counter == 0) {
            name = "Борщ"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Блины"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Пельмени"
            food.replaceChildren(name)
        }
    }
}
let timer = setInterval(move, 2000)
    /*shop*/
    /*первый*/
if (window.matchMedia("(max-width: 1700px)").matches) {
    const img = document.querySelector('.product__image img')
    window.addEventListener('resize', change_img)
    let width1
    let width2
    let width3

    function change_img() {
        width1 = document.querySelector('.product__image').offsetWidth
        console.log(width1)
        img.style.width = width1 + 'px'
        img.style.height = '500px'
    }

    /*второй*/
    const img2 = document.querySelector('.product__image__2 img')
    window.addEventListener('resize', change_img_2)

    function change_img_2() {
        width2 = document.querySelector('.product__image__2').offsetWidth
        console.log(width1)
        img2.style.width = width2 + 'px'
        img2.style.height = '500px'
    }
    /*третий*/
    const img3 = document.querySelector('.product__image__3 img')
    window.addEventListener('resize', change_img_3)

    function change_img_3() {
        width3 = document.querySelector('.product__image__3').offsetWidth
        console.log(width1)
        img3.style.width = width3 + 'px'
        img3.style.height = '500px'
    }
}