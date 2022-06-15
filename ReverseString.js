const name = "Shafayet";
function reverseString(text){
    let reversed = "";
    for(const char of text){
        reversed = char + reversed; // Jei ashbe shei first e boshbe;
    }
    return reversed;
}
const reversedName = reverseString(name);
console.log(reversedName);