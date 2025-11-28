function arrForEach() {
    let arr =[10,20,30,40];

    for(let i in arr){
        console.log(i+" : "+arr[i]);
    }
}

arrForEach();

function arrForEach2(arr) {
    for(let i in arr){
        console.log(i+" : "+arr[i]);
    }
}

arrForEach2([5,7,9,11]);



function arrForEach3(func) {
    let arr =[10,20,30,40];

    func(arr);
}

arrForEach3(arrForEach2);

const printFunc = (index, values)=>{
    console.log(index+ " : "+values);
}

function arrForEach4(func){
    let arr =[66,77,88,99];

    for(let i in arr){
        func(i,arr[i]);
    }
}

arrForEach4(printFunc);

function arrForEach5(arr, func){
    for(let i in arr){
        func(i,arr[i]);
    }
}

arrForEach5([500,300,100,400],(a,b )=>{console.log(a+'<<<<<------->>>>>' + b)});

//콜백함수 매개변수로 필요로 하는 기능
//setTimeout 함수,시간 ->일정'시긴'이 지난후 함수를 실행

setTimeout(()=>{},3000)

const cb = ()=> {
    console.log('cb 함수 호출');
}

const outCb = (f)=>{
    console.log("outCb가 수행하는 코드1");
    console.log("outCb가 수행하는 코드2");
    f();
}

setTimeout(()=>{
    console.log('setTimeout 실행 중');
    outCb(cb);
},5000);