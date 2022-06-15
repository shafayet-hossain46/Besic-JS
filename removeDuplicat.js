let numbers = [3,3,5,5,33,33,56,23,332];
function removeDuplicate(values){
    let duplicates = [];
    for(let i = 0; i < values.length; i++){
        let element = values[i];
        if(duplicates.indexOf(element) == -1){
            duplicates.push(element);
        }else{
            console.log("Duplicates are = ",element); // This line is just to watch duplicates.
        }
    }
    return duplicates;

    /*
        (Using for each)
        for(const element of values){
            if(duplicates.indexOf(element) == -1){
                duplicates.push(element)
            }
        }
        return duplicates;
    */    
}

let duplicateLess = removeDuplicate(numbers)
console.log(duplicateLess);