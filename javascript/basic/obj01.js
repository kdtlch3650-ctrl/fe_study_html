//Object 객체

//자바스크립트 자료형

let x = 10;
let arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
console.log(arr);

//객체 (Object)
//{key:value, key:value}

//JSON : js Object Notation
//{key:value, key:value}

//java 자료형 비교 Map <key, Value>

let weather = "비";

let weatherInfo = {
    day: '251127',
    weather: '비',
    temperature: 3,
    location: '중앙동'
}; //객체

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.weather);
console.log(weatherInfo.temperature);

//점심식사정보
// 메뉴:짜장면 가격:5000 가게명:대천반점 위치:시장내부

let iunchInfo = {
    menu: '짜장면',
    price: 5000,
    shop: '대천반점',
    location: '시장내부'
}

//객체 키:값

//객체, 배열
//객체 키 : 배열
//배열 : 객체

//객체 : {}
//배열 : [] 로 구분

let shopInpo = {
    name: '대천반점',
    location: '시장내부',
    menu: ['짜장면', '잡채', '짬뽕', '탕수육']
};

console.log('=======================');

console.log(shopInpo.name);
console.log(shopInpo.menu[0]);

let shopInpo2 = {
    name: '대천반점',
    location: '시장내부',
    menu:
        [
            {
                name: '짜장면',
                price: 5000
            },
            {
                name: '잡채밥',
                price: 7000
            },
            {
                name: '우동',
                price: 5000
            },
            {
                name: '울면',
                price: 7000
            }
        ]
};

console.log(shopInpo2.menu[0]);
console.log(shopInpo2.menu[3].price);

let shopInpo3 = {
    name: '대천반점',
    location: '시장내부',
    address:{
        postCode: 51211,
        addr1:'천안시',
        addr2:'동남구'
    },
    menu:
        [
            {
                name: '짜장면',
                price: 5000,
                raw:['양파','돼지고기','춘장']
            },
            {
                name: '잡채밥',
                price: 7000,
                raw:['양파','잡채','밥']
            },
            {
                name: '우동',
                price: 5000,
                raw:['양파','호박','춘장','옥수수면']
            },
            {
                name: '울면',
                price: 7000,
                raw:['새우','호박','파','면']
            }
        ]
};

//주소가 어느시에 있는지
//잡채밥이 들어있는 객체
// 우동의 원재료들만
//울면안에 파만
console.log(shopInpo3.address.addr1);
console.log(shopInpo3.menu[1]);
console.log(shopInpo3.menu[2].raw);
console.log(shopInpo3.menu[3].raw[2]);


let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];
//휠렛 가격
//볶음밥 재로
//싸이버거 닭다리 재료
//대천반점 위치

console.log(shopList[1].menu[1].price);
console.log(shopList[0].menu[2].raw);
console.log(shopList[1].menu[0].raw[2]);
console.log(shopList[0].location);