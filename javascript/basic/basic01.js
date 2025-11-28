console.log('베이직01');
console.log('text');

//변수선언
//var let const

let a = 10;
let b = 20.22;
let c = "문자열";
let d = '작은따옴표도문자열';
let e = true;
let f = false;

const g = 30;
const h = "문자";

a = 50;
// g = 300; const값 변경 불가
console.log('abc');
console.log("abc");
console.log('감싸서"안녕"ㅎㅎ');
console.log("감싸서'안녕'ㅎㅎ");
console.log("큰따옴표 감싸서 \"안녕\"ㅎㅎ");
console.log(`백틱으로 감싸면 "큰따옴표 ' 작은따옴표 편함`);

let x = 20;
let y;
console.log(x);
console.log(y); // undefined 정의 되지 않았다.


z = 50;
console.log(z);
// let z = 20;
// let z = 50;
var z = 20; //맨위에 선언한것 처럼 취급 : 호이스팅
var z = 50; //밑에서 선언가능 , 중복 선언 가능

//rist ------var의 이런 특성때문에 위험해서 let을 사용         

