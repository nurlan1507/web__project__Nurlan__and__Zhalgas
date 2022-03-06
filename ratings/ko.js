const select = document.querySelector('select');

document.getElementById('foodname').innerHTML = 'Кимчи'
if (select.value == "en") {
    document.getElementById('foodname').innerHTML = 'Kimchi'
}
const triggers = document.querySelectorAll('.country')
triggers.forEach(item => item.addEventListener('click', function() {
    new Audio('images/engineer_no01.mp3').play();
}))
const navsound = document.querySelectorAll('.nav-link')
navsound.forEach(item => item.addEventListener('click', function() {
    new Audio('images/minecraft_click.mp3').play();
}))
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

/*slider*/
const button = document.querySelector('.btn__')
const button_back = document.querySelector('.btn__back')
const slider = document.querySelector('.slider')
const slider_line = document.querySelector('.slider__line')
const arr_photo = document.querySelectorAll('.slider .slider__line img')
let counter = 0;
let width;


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
    if (select.value == "en") {
        if (counter == 0) {
            name = "Kimchi"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Kimbap"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Omuk"
            food.replaceChildren(name)
        }
    } else if (select.value == "ru") {

        if (counter == 0) {
            name = "Кимчи"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Кимпаб"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Омук"
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
        'ru': 'Кимчи',
        'en': 'Kimchi',
    },
    "description__intro__2": {
        'ru': 'Кимпаб',
        'en': 'Kimbap',
    },
    "description__intro__3": {
        'ru': 'Омук',
        'en': 'Omuk',
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
        "ru": "Этот упрощённый рецепт традиционной корейской закуски подойдёт для новичков. Корейцы кладут в кимчи острый перец кочукару с выраженным вкусом. Но если вы его не нашли, замените обычным красным молотым.1 кг пекинской капусты (кочан среднего размера); ¼ стакана соли; 1 столовая ложка тёртого чеснока; 1 чайная ложка тёртого имбиря; 1 чайная ложка сахара; 2 столовые ложки рыбного соуса или 3 столовые ложки воды; 1–5 столовых ложек кочукару или молотого красного острого перца; 200 г дайкона или моркови; зелёный лук.",
        "en": "This simplified recipe for a traditional Korean snack is perfect for beginners. Koreans put hot kochukaru peppers in kimchi with a pronounced taste. But if you didn’t find it, replace it with ordinary red ground. 1 kg of Beijing cabbage (medium-sized head); ¼ cup salt; 1 tablespoon of grated garlic; 1 teaspoon grated ginger; 1 teaspoon of sugar; 2 tablespoons fish sauce or 3 tablespoons water 1-5 tablespoons of kochukaru or ground red hot pepper; 200 g daikon or carrots; green onion.",
    },
    "description__txt__2": {
        "ru": "Ниже приведён классический рецепт кимпаба, но в принципе его можно делать с любой начинкой. Если в вашем холодильнике чего-то не хватает, пропустите или замените ингредиент. Вместо жареного мяса добавьте ветчину, сосиски или крабовые палочки. Маринованный дайкон можно заменить солёным огурцом или кимчи, морковь — болгарским перцем. Ингредиенты: 200 г круглозёрного риса; 100 г отварной или жареной говядины; 70 г маринованного дайкона; 4 листа нори; 1 морковь; 1 огурец; 1 яйцо; кунжутное масло; масло для жарки.",
        "en": "Below is a classic kimbap recipe, but in principle it can be made with any filling. If your fridge is missing something, skip or substitute an ingredient. Instead of fried meat, add ham, sausages or crab sticks. Pickled daikon can be replaced with pickled cucumber or kimchi, carrots with bell pepper. Ingredients: 200 g round grain rice; 100 g boiled or fried beef; 70 g pickled daikon; 4 nori sheets; 1 carrot; 1 cucumber; 1 egg; Sesame oil; frying oil.",
    },
    "description__txt__3": {
        "ru": "Популярная уличная еда, которая продаётся в виде длинных котлеток или полосок на палочке.Ингредиенты: 200 г филе белой рыбы; 100 г филе кальмара; 100 г очищенных креветок; 2 зубчика чеснока; ½ луковицы; 1 чайная ложка сахара и соли; 2 столовые ложки муки; 2 столовые ложки крахмала; 1 яичный белок; 1½ стакана подсолнечного масла для жарки.",
        "en": "Ingredients: 200 g white fish fillet; 100 g squid fillet; 100 g of peeled shrimp; 2 cloves of garlic; ½ onion; 1 teaspoon sugar and salt; 2 tablespoons of flour; 2 tablespoons of starch; 1 egg white; 1½ cups sunflower oil for frying",
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






let currentValue1 = document.getElementById('total1');
let newvalue = document.createElement('a');

let arrofvotes1 = [];


let arrofvotes2 = [];


let arrofvotes3 = [];


let counterObs = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let res = 0;

if (localStorage.getItem('result61') == null) {
    localStorage.setItem('result61', 0.0);
}
if (localStorage.getItem('result62') == null) {
    localStorage.setItem('result62', 0.0);
}
if (localStorage.getItem('result63') == null) {
    localStorage.setItem('result63', 0.0);
}
//firts meal
let star1 = document.querySelectorAll('.star__1');
let starArr1 = Array.from(star1);
let confirmed1 = false;
let counterValue;
let btn1 = document.querySelector('.btn-1');
let block1 = document.querySelector('.detailed__raiting__1');
let total1 = document.createElement('a');
block1.append(localStorage.getItem('result61'));
btn1.addEventListener('click', function() {
    let first_arr = JSON.parse(localStorage.getItem('first_arr6')) || [];
    first_arr.push(counter1);
    console.log(first_arr);
    for (let i = 0; i < first_arr.length; i++) {
        res = res + first_arr[i];
    }
    total1 = res / first_arr.length;
    total1 = total1.toString();
    total1 = total1.slice(0, 3);
    res = 0;
    localStorage.setItem('result61', total1);
    block1.replaceChildren(total1);
    window.localStorage.setItem('first_arr6', JSON.stringify(first_arr));
});
for (let i = 0; i < starArr1.length; i++) {
    starArr1[i].addEventListener('mouseenter', function() {
        let it = i + 1;
        for (let i = 0; i < starArr1.length; i++) {
            starArr1[i].classList.remove('active');
        }
        for (let i = 0; i < it; i++) {
            starArr1[i].classList.add('active');
        }
        confirmed1 = false;
    });
    starArr1[i].addEventListener('click', function() {
        let it = i + 1;
        for (let i = 0; i < it; i++) {
            starArr1[i].classList.add('active');
            counterObs++;
        }
        confirmed1 = true;
        counter1 = counterObs;
        counterObs = 0;
    })
    for (let i = 0; i < starArr1.length; i++) {
        starArr1[i].addEventListener('mouseleave', function() {
            for (let i = 0; i < starArr1.length; i++) {
                if (confirmed1 == false) {
                    counter = 0;
                    if (starArr1[i].classList.contains('active')) {
                        starArr1[i].classList.remove('active');
                    }
                }
            }
        })
    }
}





//second meal
let star2 = document.querySelectorAll('.star__2');
let starArr2 = Array.from(star2);
let confirmed2 = false;
let counterValue2;
let block2 = document.querySelector('.detailed__raiting__2');
let total2 = document.createElement('a');
let btn2 = document.querySelector('.btn-2');
block2.append(localStorage.getItem('result62'));
btn2.addEventListener('click', function() {
    let second_arr = JSON.parse(localStorage.getItem('second_arr6')) || [];
    second_arr.push(counter2);
    console.log(second_arr);
    for (let i = 0; i < second_arr.length; i++) {
        res = res + second_arr[i];
    }
    total2 = res / second_arr.length;
    total2 = total2.toString();
    total2 = total2.slice(0, 3);
    localStorage.setItem('result62', total2);
    res = 0;
    block2.replaceChildren(total2);
    window.localStorage.setItem('second_arr6', JSON.stringify(second_arr));
});
for (let i = 0; i < starArr2.length; i++) {
    starArr2[i].addEventListener('mouseenter', function() {
        let it = i + 1;
        for (let i = 0; i < starArr2.length; i++) {
            starArr2[i].classList.remove('active');
        }
        for (let i = 0; i < it; i++) {
            starArr2[i].classList.add('active');
        }
        confirmed2 = false;
    });
    starArr2[i].addEventListener('click', function() {
        let it = i + 1;
        for (let i = 0; i < it; i++) {
            starArr2[i].classList.add('active');
            counterObs++;
        }
        confirmed2 = true;
        counter2 = counterObs;
        counterObs = 0;
    })
    for (let i = 0; i < starArr2.length; i++) {
        starArr2[i].addEventListener('mouseleave', function() {
            for (let i = 0; i < starArr1.length; i++) {
                if (confirmed2 == false) {
                    counter = 0;
                    if (starArr2[i].classList.contains('active')) {
                        starArr2[i].classList.remove('active');
                    }
                }
            }
        })
    }
}




//third meal
let star3 = document.querySelectorAll('.star__3');
let starArr3 = Array.from(star3);
let confirmed3 = false;

let block3 = document.querySelector('.detailed__raiting__3');
let total3 = document.createElement('a');
let btn3 = document.querySelector('.btn-3');
block3.append(localStorage.getItem('result63'));
btn3.addEventListener('click', function() {
    let third_arr = JSON.parse(localStorage.getItem('third_arr6')) || [];
    third_arr.push(counter3);
    console.log(third_arr);
    for (let i = 0; i < third_arr.length; i++) {
        res = res + third_arr[i];
    }
    total3 = res / third_arr.length;
    total3 = total3.toString();
    total3 = total3.slice(0, 3);
    res = 0;
    block3.replaceChildren(total3);
    window.localStorage.setItem('third_arr6', JSON.stringify(third_arr));
    localStorage.setItem('result63', total3);
});


for (let i = 0; i < starArr3.length; i++) {
    starArr3[i].addEventListener('mouseenter', function() {
        let it = i + 1;
        for (let i = 0; i < starArr3.length; i++) {
            starArr3[i].classList.remove('active');
        }
        for (let i = 0; i < it; i++) {
            starArr3[i].classList.add('active');
        }
        confirmed3 = false;
    });
    starArr3[i].addEventListener('click', function() {
        let it = i + 1;
        for (let i = 0; i < it; i++) {
            starArr3[i].classList.add('active');
            counterObs++;
        }
        confirmed3 = true;
        counter3 = counterObs;
        counterObs = 0;

    })
    for (let i = 0; i < starArr3.length; i++) {
        starArr3[i].addEventListener('mouseleave', function() {
            for (let i = 0; i < starArr3.length; i++) {
                if (confirmed3 == false) {
                    if (starArr3[i].classList.contains('active')) {
                        starArr3[i].classList.remove('active');
                    }
                }
            }
        })
    }
}



/*
const rating = document.querySelector('.rating__system__1'),
    ratingItem = document.querySelectorAll('.star__1');
let counter = 0;
let index
rating.onclick = function(e) {
    e.target.classList.add('active');
    for (let i = 0; i < ratingItem.length; i++) {
        if (ratingItem.classList.contains('active')) {
            index = i;
        }
    }
    for (let i = index; i > -1; i--) {
        ratingItem[i].classList.add('active');
    }
    console.log(target);
    if (target.classList.contains('star__1')) {
        target.classList.add('active', 'current-active');
    }
}
rating.onmouseover = function(e) {
    let target = e.target;
    if (target.classList.contains('star__1')) {
        target.classList.add('active');
        counter++;
    }
}
*/