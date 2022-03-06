var flag1 = document.getElementById("flag1");
var flag2 = document.getElementById("flag2");
var flag3 = document.getElementById("flag3");

var paths = ['images/flags/kz.png','images/flags/uz.png','images/flags/kor.png','images/flags/japan.png','images/flags/rus.png','images/flags/bri.png'];

var setNum = 0;
 
function foo(num) {
    flag1.src = paths[num * 3];
    flag2.src = paths[num * 3 + 1];
    flag3.src = paths[num * 3 + 2];
}

var time = 1500;
var num = 9999;

while (num){
    num--;
    setTimeout(foo, time, 1);
    time+=1500;
    setTimeout(foo, time, 0);
    time+=1500;
}