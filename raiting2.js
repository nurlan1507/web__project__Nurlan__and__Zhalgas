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

if (localStorage.getItem('result21') == null) {
    localStorage.setItem('result21', 0.0);
}
if (localStorage.getItem('result22') == null) {
    localStorage.setItem('result22', 0.0);
}
if (localStorage.getItem('result23') == null) {
    localStorage.setItem('result23', 0.0);
}
//firts meal
let star1 = document.querySelectorAll('.star__1');
let starArr1 = Array.from(star1);
let confirmed1 = false;
let counterValue;
let btn1 = document.querySelector('.btn-1');
let block1 = document.querySelector('.detailed__raiting__1');
let total1 = document.createElement('a');
block1.append(localStorage.getItem('result21'));
btn1.addEventListener('click', function() {
    let first_arr = JSON.parse(localStorage.getItem('first_arr2')) || [];
    first_arr.push(counter1);
    console.log(first_arr);
    for (let i = 0; i < first_arr.length; i++) {
        res = res + first_arr[i];
    }
    total1 = res / first_arr.length;
    total1 = total1.toString();
    total1 = total1.slice(0, 3);
    res = 0;
    localStorage.setItem('result21', total1);
    block1.replaceChildren(total1);
    window.localStorage.setItem('first_arr2', JSON.stringify(first_arr));
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
block2.append(localStorage.getItem('result22'));
btn2.addEventListener('click', function() {
    let second_arr = JSON.parse(localStorage.getItem('second_arr2')) || [];
    second_arr.push(counter2);
    console.log(second_arr);
    for (let i = 0; i < second_arr.length; i++) {
        res = res + second_arr[i];
    }
    total2 = res / second_arr.length;
    total2 = total2.toString();
    total2 = total2.slice(0, 3);
    localStorage.setItem('result22', total2);
    res = 0;
    block2.replaceChildren(total2);
    window.localStorage.setItem('second_arr2', JSON.stringify(second_arr));
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
block3.append(localStorage.getItem('result23'));
btn3.addEventListener('click', function() {
    let third_arr = JSON.parse(localStorage.getItem('third_arr2')) || [];
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
    window.localStorage.setItem('third_arr2', JSON.stringify(third_arr));
    localStorage.setItem('result23', total3);
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