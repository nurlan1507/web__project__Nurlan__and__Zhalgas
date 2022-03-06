const select = document.querySelector('select');
document.getElementById('foodname').innerHTML = 'Плов'
if (select.value == "en") {
    document.getElementById('foodname').innerHTML = 'Plov'
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
document.getElementById('foodname').innerHTML = 'Plov'

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
            name = "Plov"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Shurpa"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Kazon-Kabob"
            food.replaceChildren(name)
        }
    } else if (select.value == "ru") {
        if (counter == 0) {
            name = "Плов"
            food.replaceChildren(name)
        } else if (counter == 1) {
            name = "Шурпа"
            food.replaceChildren(name)
        } else if (counter == 2) {
            name = "Казон-Кабоб"
            food.replaceChildren(name)
        }
    }
}
let timer = setInterval(move, 5000)
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
        'ru': 'Плов',
        'en': 'Plov',
    },
    "description__intro__2": {
        'ru': 'Шурпа',
        'en': 'Shurpa',
    },
    "description__intro__3": {
        'ru': 'Козон-Кабоб',
        'en': 'Kazon-Kabob',
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
        "ru": "Плов ассоциативно связан с кухней узбекского народа. Существует более тысячи разновидностей этого, с одной стороны простого блюда. Отличительной особенностью именно узбекского плова является одновременная тепловая обработка мяса и риса и закладка их абсолютно идентичного количества.1 кг длиннозёрного риса,1 кг баранины, 1 кг моркови, 300 мл растительного масла, 4 небольшие луковицы, 2 небольших сухих острых перчика, чеснок – 1 ст. л. сушеного барбариса, 1 ст. л. зиры, 1 ч. л. семян кориандра ,соль",
        "en": "Plov is associated with the cuisine of the Uzbek people. There are over a thousand varieties of this, on the one hand a simple dish. A distinctive feature of the Uzbek plov is the simultaneous heat treatment of meat and rice and laying them in absolutely identical quantities. 1 kg of long-grain rice, 1 kg of lamb, 1 kg of carrots, 300 ml of vegetable oil, 4 small onions, 2 small dry hot peppers, garlic - 1 Art. l. dried barberry, 1 tbsp. l. zira, 1 tsp. coriander seeds, salt",
    },
    "description__txt__2": {
        "ru": "Еще одним «коронным» первым блюдом является суп шурпа.Набор продуктов используется стандартный: баранина или говядина, много зелени и разнообразных овощей, но главной особенностью шурпы является то, что этот суп довольно густой.1кг. мяса с косточкой (баранина или говядина), 2 л. воды, 1 маленькая луковица для бульона, 1 маленькая морковь для бульона, 4 средние морковки, 1кг. картофеля (5-6 шт.), 4 помидора (средние), 2 болгарских перца (средние), 2 стручка горького перца, 3-4 зубчика чеснока ,4 ст. л. томатного соуса, 2 шт. сладкого лукапучок кинзы или петрушки, 4-5 шт. лаврового листа , 10 горошин черного перца",
        "en": "Shurpa soup is another “crown” first course. The standard set of products is used: lamb or beef, a lot of greens and a variety of vegetables, but the main feature of shurpa is that this soup is quite thick. 1 kg. meat with bone (lamb or beef), 2 l. water, 1 small onion for broth, 1 small carrot for broth, 4 medium carrots, 1kg. potatoes (5-6 pcs.), 4 tomatoes (medium), 2 bell peppers (medium), 2 pods of hot pepper, 3-4 cloves of garlic, 4 tbsp. l. tomato sauce, 2 pcs. sweet onion a bunch of cilantro or parsley, 4-5 pcs. bay leaf, 10 black peppercorns",
    },
    "description__txt__3": {
        "ru": "Козон-кабоб — мясное блюдо, ингредиенты для которого обжариваются в казане. Молодое картофельное и сочное мясо обжариваются на курдючном молоке при очень высоких температурах, при обычном использовании масла сгорает. Блюдо получается очень сытным и калорийным.1 кг мякоти говядины, 100 г бараньего жира, 2 кг картофеля, 2 средних луковицы, 3 средних сочных помидора, 100 мл растительного масла, 3 ст. л. смесь специй (семена зиры и кориандра, сухой базилик, красный острый перец), соль, по 5–7 веточек укропа и кинзы",
        "en": "Kozon-kabob is a meat dish, the ingredients for which are fried in a cauldron. Young potato and juicy meats are fried in fat-tailed milk at very high temperatures, with normal use of oil it burns out. The dish turns out to be very satisfying and high-calorie. 1 kg of beef pulp, 100 g of lamb fat, 2 kg of potatoes, 2 medium onions, 3 medium juicy tomatoes, 100 ml of vegetable oil, 3 tbsp. l. a mixture of spices (seeds of cumin and coriander, dry basil, red hot pepper), salt, 5–7 sprigs of dill and cilantro",
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

if (localStorage.getItem('result51') == null) {
    localStorage.setItem('result51', 0.0);
}
if (localStorage.getItem('result52') == null) {
    localStorage.setItem('result52', 0.0);
}
if (localStorage.getItem('result53') == null) {
    localStorage.setItem('result53', 0.0);
}
//firts meal
let star1 = document.querySelectorAll('.star__1');
let starArr1 = Array.from(star1);
let confirmed1 = false;
let counterValue;
let btn1 = document.querySelector('.btn-1');
let block1 = document.querySelector('.detailed__raiting__1');
let total1 = document.createElement('a');
block1.append(localStorage.getItem('result51'));
btn1.addEventListener('click', function() {
    let first_arr = JSON.parse(localStorage.getItem('first_arr5')) || [];
    first_arr.push(counter1);
    console.log(first_arr);
    for (let i = 0; i < first_arr.length; i++) {
        res = res + first_arr[i];
    }
    total1 = res / first_arr.length;
    total1 = total1.toString();
    total1 = total1.slice(0, 3);
    res = 0;
    localStorage.setItem('result51', total1);
    block1.replaceChildren(total1);
    window.localStorage.setItem('first_arr5', JSON.stringify(first_arr));
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
block2.append(localStorage.getItem('result52'));
btn2.addEventListener('click', function() {
    let second_arr = JSON.parse(localStorage.getItem('second_arr5')) || [];
    second_arr.push(counter2);
    console.log(second_arr);
    for (let i = 0; i < second_arr.length; i++) {
        res = res + second_arr[i];
    }
    total2 = res / second_arr.length;
    total2 = total2.toString();
    total2 = total2.slice(0, 3);
    localStorage.setItem('result52', total2);
    res = 0;
    block2.replaceChildren(total2);
    window.localStorage.setItem('second_arr5', JSON.stringify(second_arr));
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
block3.append(localStorage.getItem('result53'));
btn3.addEventListener('click', function() {
    let third_arr = JSON.parse(localStorage.getItem('third_arr5')) || [];
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
    window.localStorage.setItem('third_arr5', JSON.stringify(third_arr));
    localStorage.setItem('result53', total3);
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