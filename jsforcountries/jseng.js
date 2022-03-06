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
document.getElementById('foodname').innerHTML = 'breakfast'

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
    if (counter == 0) {
        name = "breakfast"
        food.replaceChildren(name)
    } else if (counter == 1) {
        name = "Shepsherd pie"
        food.replaceChildren(name)
    } else if (counter == 2) {
        name = "Fish and Chips"
        food.replaceChildren(name)
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