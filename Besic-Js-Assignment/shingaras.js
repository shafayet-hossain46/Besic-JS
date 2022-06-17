// Problem Two
// Calculating the prices of foods.

function pandaCost(shingara, somocha, gilapi){

    // Setting the price of foods.
    const perShingaraPrice = 7;
    const perSomochaPrice = 10;
    const perGilapiPrice = 15; 


    // Calculating
    const totalShingaraPrice = shingara * perShingaraPrice;
    const totalSomochaPrice = somocha * perSomochaPrice;
    const totalGilapiPrice = gilapi * perGilapiPrice;


    // Total Price Calculating.
    const totalPrice = totalShingaraPrice + totalSomochaPrice + totalGilapiPrice;
    return totalPrice;
}

const totalFoodPrice = pandaCost(1,3,1);
console.log(totalFoodPrice);