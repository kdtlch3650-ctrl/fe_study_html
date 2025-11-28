let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

// let changeLink = function (str) {
//     if (str.indexOf("://") == -1) {
//         return "경로가 잘못되었습니다.";
//     } else {
//         if (str.includes("https")) {
//             str = str.substring(0, 8) + "secure." + str.substring(str.indexOf("//") + 2);
//             return str;
//         } else if (str.includes("http")) {
//             str = str.substring(0, 4) + "s://open." + str.substring(str.indexOf("//") + 2);
//             return str;
//         }
//     }
// };

// let changeLink = function (str) {
//     if (str.indexOf("://") == -1) {
//         return "경로가 잘못되었습니다.";
//     }
//     let a = "https://";
//     let b = str.substring(str.indexOf("://")+3);
//     let ab = [a, b];


//     if (str.includes("https")) {
//             str = a+"secure."+b;
//             return str;
//         } else if (str.includes("http")) {
//             str = a+"open."+b;
//             return str;
//         }
// }

// let changeLink = function (str) {
//     if (!str.includes("://")) {
//         return "경로가 잘못되었습니다.";
//     }

//     // 2. 프로토콜 분리
//     const [protocol, domain] = str.split("://");

//     if(protocol.includes("https")){
//         str = "https://secure."+domain;
//         return str;
//     }
//     if(protocol.includes("http")){
//         str = "https://open."+domain;
//         return str;
//     }
// }

let changeLink = function(url){
    // console.log(url.includes('://'));
    // console.log(url.indexOf('://'));

    if(url.includes('://')==false){
        return "주소틀림"
    }

    // console.log(url.indexOf("://")); 
    // console.log(url.substring(url.indexOf("://")+3)); 
    let splitStr = url.split('://');
    // console.log(splitStr);

    if(splitStr[0] == 'https'){
        // return splitStr[0] + "://secure."+splitStr[1];
        return "https://secure."+splitStr[1];

    }else{
        // return splitStr[0] + "s://open"+splitStr[1];
        return "https://open"+splitStr[1];

    }
};

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));