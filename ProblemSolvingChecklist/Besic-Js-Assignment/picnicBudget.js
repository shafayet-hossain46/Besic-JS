// Problem Three.
// Picnic Budget.

function picnicBudget(amountOfPeople){
    const firstHundredPeople = 5000;
    const secondHundredPeople = 4000;
    const thirdHundredPeople = 3000;

    if(amountOfPeople <= 100){
        const firstHundredPeopleMoney = amountOfPeople * firstHundredPeople;
        return firstHundredPeopleMoney;
    }else if(amountOfPeople <= 200){
        const firstHundred = 100 * firstHundredPeople;
        const restPeople = amountOfPeople - 100;
        const secondHundred = restPeople * secondHundredPeople;
        const total = firstHundred + secondHundred;
        return total;
    }else if(amountOfPeople > 200){
        const firstHundredMen = 100 * firstHundredPeople;
        const secondHundredMen = 100 * secondHundredPeople;
        const restAll = amountOfPeople - 200;
        const totalCostOfPicnic = restAll * thirdHundredPeople;
        const totalCost = firstHundredMen + secondHundredMen + totalCostOfPicnic;
        return totalCost;
    }
}

let totalMoney = picnicBudget(300);
console.log(totalMoney);