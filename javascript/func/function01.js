function func01(){
    console.log('func01()');
}

func01();

const func02 = function(){
    console.log('func02()');
}

func02();

const func03 = function func033(){
    console.log('func02()');
}

//func033(); 인식안됨
func03();

const func04 = ()=>{
    console.log('func04()');
}

func04();

function func05(a,b){
    console.log('func05() '+a+' '+b);
}

func05(10,20);
func05("A","B");

const func06 = function(a,b){
    console.log('func05() '+a+' '+b);
}
func06(50,60);

const func07 = function func0777(a,b){
    console.log('func05() '+a+' '+b);
}
func06(99,88);

const func08 = (x,y)=>{
console.log('func05() '+x+' '+y);
}
func08("hi",8228);