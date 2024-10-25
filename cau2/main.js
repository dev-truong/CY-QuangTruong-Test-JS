var mang = new Array(10,5,2,5,6,7,8,9);
function tong(array) {
    let sum = 0;
    for (var i = 0; i < mang.length; i++) {
        sum = sum + array[i]
    }
    return sum;
}

function soNguyenTo(num) {
    if(num < 2) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}
function soNguyenToFilter(array) {
    return array.filter(soNguyenTo);
}

function soChiaHetCho3(array) {
    return array.filter(num => num % 3 === 0);
}
setTimeout(() => {
    console.log("Tong cac chu so trong mang: ",tong(mang));
    setTimeout(() => {
        console.log("Cac so nguyen to: ",soNguyenToFilter(mang));
        setTimeout(() => {
            console.log("Cac so chia het cho 3: ",soChiaHetCho3(mang))  ;
        }, 3000)
    }, 3000)
}, 3000);