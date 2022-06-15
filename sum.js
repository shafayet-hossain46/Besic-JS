let sumArray = [40,20,30,20,30,30];
function doSum(sumArr) {
    let sumAll = 0;
    for(let i = 0; i < sumArr.length; i++){
        let element = sumArr[i];
        sumAll = sumAll + element;
    }
    return sumAll;
}
let total = doSum(sumArray);
console.log(total);