function perfectNumber(randomNumber) {
    let sum = 0;
    for (let i = 1; i < randomNumber; i++) {
        if(randomNumber % i === 0) {
            sum = sum + i;
        }
    }
    return sum === randomNumber;
}
setInterval(function (){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    if(perfectNumber(randomNumber)){
        console.log(randomNumber + " la so hoan hao");
    } else {
        console.log(randomNumber + " khong la so hoan hao");
    }
}, 2000)

