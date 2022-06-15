let numbers = [33,4,6,34,456,4,34,3333,444];
let largest = numbers[0];
for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element > largest){
        largest = element;
    }
}
console.log(largest);