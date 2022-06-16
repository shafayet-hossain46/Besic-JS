// Returning Positive Numbers.
let numbers = [0, 1, 2, 3, -4, 5, 6];
function returningPositiveNumbers(value){
    let noneNegativeNumbers = [];
    for(const number of value){
        if(number < 0){
            break;
        }else{
            noneNegativeNumbers.push(number);
        }
    }
    return noneNegativeNumbers;
}
let positiveNumbers = returningPositiveNumbers(numbers);
console.log(positiveNumbers);