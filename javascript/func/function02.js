function sum1() {
    return 100;
}

sum1();

let s1 = sum1();
console.log(sum1());

const sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(300, 50));

const sum3 = function sum333(x, y) {
    return x + y;
}
console.log(sum3(90, 88));

const sum4 = (q, w) => {
    return q + w;
}
console.log(sum4(34, 56));

const sum5 = (a, b) => a + b; // 화살표 함수 => 코드 뒤에 나오는 값을 바로 리턴으로 인식
console.log(sum5(100, 200));

const sum6 = () => 1 + 2 + 3 + 4 + 5;
console.log(sum6());

function func() {
    let x = 10;
    console.log(x);
}

if (1 == 1) {
    let x = 20;
}
{
    let x = 30;
}

// console.log(x); 찾을 수 없는 변수명


//호이스팅
//var w
console.log(w);
w = 20;
var w=30;

r= 3000;
var r;
console.log(r);

check();

function check(){
    console.log('check');
}

check();

//일회용 즉시 실행함수

(function onetime(){
    console.log('일회용 함수 실행');
})();

// onetime();실행안됨.
