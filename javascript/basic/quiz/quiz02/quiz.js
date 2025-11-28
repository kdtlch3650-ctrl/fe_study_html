function getMealByTime(time){
    let a = "";
    if(time>=6 && time<10){
        a="아침";
    }else if(time>=11 && time<14){
        a="점심";
    }else if(time>=17 && time<20){
        a="저녁";
    }else if(time>=21 && time<23){
        a="야식";
    }else{
        a="금식";
    }
    return a;
}
let time=[5,8,13,16,19,22,2];
for(let i = 0;i<time.length;i++ ){
console.log(getMealByTime(time[i]));
};