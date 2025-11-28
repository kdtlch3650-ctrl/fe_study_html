//Java 배열
//new int[3]
//new int[5]
//--> ArrayList .add .remove

//js 배열 처리

/*
    shift   :     앞 삭제
    unshift :     앞 추가

    pop     :     뒤 삭제
    push    :     뒤 추가
*/

let arr = [1, 2, 3];

console.log(arr);
arr.unshift(10);
console.log(arr);
arr.push(30);
console.log(arr);
arr.shift();
arr.pop();
console.log(arr);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2)); //concat 연결
console.log(arr1.concat(arr1));

console.log(arr1);
arr1 = arr1.concat(arr2); //원본에 영향 주러면 다시 저장해라.
console.log(arr1);

//파괴적함수 : 함수 실행 후 원본에 영향 o
//비파괴적함수 : 함수 실행 후 원본에 영향 x

//... 전개연산자

let arr3 = [...arr2];//전개연산자
console.log(arr2);
console.log(arr3);
arr3[0]=99;
console.log(arr2);
console.log(arr3);



//깊은복사 : 값 자체를 새롭개 복사
//얕은복사 : 바라보는 주소를 복사

let x = [1,2,3];
let y = x;
let z = [...x];
console.log(x);
console.log(y);
console.log(z);

x[2] = 88;
console.log(x);
console.log(y);
console.log(z);

let q =[10,20,...x,30,40];
console.log(q);

//  splice 함수
//  특정 위치에 추가, 삭제

//splice(인덱스, 삭제할개수)
//splice(인덱스, 삭제할개수, 추가할값)

console.log('=======================================');
let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1,2);
console.log(arr4);
arr4.push(6);
arr4.unshift(0);
console.log(arr4);
// arr4[2] =50;
arr4.splice(2,1,50);//2인덱스에 하나삭제후 50추가
console.log(arr4);
arr4.splice(2,0,99); //2인덱스에 삭제없이 99 추가
console.log(arr4);


console.log("==============================");
let obj = {
    name:"김밥천국",
    menu:"참치김밥"
};

console.log(obj);
obj.menu = "치즈김밥"; // 값 수정
console.log(obj);
obj.price = 6000; // price 추가
console.log(obj);
delete obj.price; // price 제거
console.log(obj);