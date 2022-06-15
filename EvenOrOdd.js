// Even Or Odd Checking
function OddEven(number){
    if(number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

let checkEvenOdd = OddEven(8);
console.log(checkEvenOdd);