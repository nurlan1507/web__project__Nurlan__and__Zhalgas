const langArr = {
    "main": {
        "ru": "Главная",
        "en": 'Main',
    },
    "countries": {
        'ru': "Страны",
        'en': "Сountries"
    },
    "createAccount": {
        'ru': 'Ещё нет аккаунта?',
        'en': "Don't have an account yet?",
    },
    "signinpop": {
        'ru': 'Войти',
        'en': 'Sign in',
    },
    "signuppop": {
        'ru': 'Зарегестрирваться',
        'en': 'Register',
    },
    "btnsigninpop": {
        'ru': 'Войти',
        'en': 'Sign in',
    },
    "bntsignuppop": {
        'ru': 'Зарегестрирваться',
        'en': 'Register',
    },
    "contacts": {
        "ru": "Контакты",
        "en": "Сontacts",
    },
    "container__intro": {
        "ru": "Ассортимент",
        "en": "Assortiment",
    },
    "creators": {
        "ru": 'Создатели',
        "en": "Сreators",
    },
    "bcontact": {
        "ru": 'Связаться с нами',
        "en": "Сontact us",
    },
    "bjoin": {
        "ru": 'Присоединиться',
        "en": 'Join us'
    },
    "search": {
        'ru': 'Поиск',
        "en": "Seacrh",
    },
    "welcome": {
        'ru': 'Добро Пожаловать в CookBook',
        'en': "Welcome to CookBook!",
    },
    "info": {
        'ru': 'На нашем сайте вы найдёте рецепты разных стран',
        'en': "Our website have a lot of different recipes of dishes of different countries",
    },
    "signin": {
        'ru': 'Войти',
        'en': 'Sign in',
    },
    "signup": {
        'ru': 'Авторизоваться',
        'en': 'Sign up',
    },
    "select": {
        'ru': "Начните с выбора страны",
        'en': "Start from choosing the country",
    },
    "adver": {
        'ru': "На нашем сайте есть блюда многих стран",
        'en': 'Our website have dishes of many countries'
    },
    "choose": {
        'ru': 'Выберите страну',
        'en': 'Choose country',
    },
    'aboutus': {
        'ru': "О нас",
        'en': "About us",
    },
    "aboutusadd": {
        'ru': "Мы студенты AITU",
        'en': "We are students of Astana IT University",
    },
    'contact_us': {
        'ru': "Наши контакты",
        'en': 'Contact Us',
    },
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