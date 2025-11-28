
//내장객체

let str = "hellohi@gmail.com"

console.log(str.length); 
console.log(str.includes("@")); // 문자열에 특정 문자가 포함 되어있는가? boolean 타입
console.log(str.indexOf("@")); //해당 문자가 있는 인데스 찾기
console.log(str.includes("!"));
console.log(str.indexOf("!")); // 없으면 -1 반환

//if(str.indexOf("!")== -1){
// cl("검색결과가 없읍니다.") 같은느낌
// }

console.log(str.substring(0,4));//특정 위치 문자 잘라내기 0~4전까지 0 <= i < 4
console.log(str.substring(5,10));//특정 위치 문자 잘라내기 5~10전까지
console.log(str);

// 이메일아이디 : 처음 ~ @
// 도메인주소 : @다음 ~끝
console.log(str.indexOf("@"));
console.log(str.substring(0, str.indexOf("@"))); //이메일 아이디
console.log(str.substring(str.indexOf("@")+1, str.length));//도메인주소 @비포함이면 +1
console.log(str.substring(str.indexOf("@")+1));//도메인주소 위의 축약 버전 첫번째 인덱스 부터 끝까지 라는 뜻


//문자에 앞뒤 공백 제거
//"abc" 가입하려다 " abc" 가입 방지
let test = " abc ";
console.log("|"+test+"|");
console.log("|"+test.trim()+"|");
console.log("|"+test+"|"); // 원본은 바뀌지 않았음.
test = test.trim(); //원본 바꾸기
console.log("|"+test+"|");

//문자 분리 split
let phone = '010-1234-5678';
let spt = phone.split("-"); // -기준으로 자르겠다
console.log(spt);
console.log(spt[1]);
console.log(spt[2]);

console.log("=======================================");
//Date
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()+1); //0~11값 +1을 해주어야함
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.getDay()); // 요일 0~6 (일 월 화 수 목 금 토)

console.log(Math.abs(-10));//절대값
console.log(Math.round(123.54)); //반올림

