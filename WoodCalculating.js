function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 5;
    const perBed = 10;


    // Calculating
    const chairWoodQuantity = chairQuantity * perChair;
    const tableWoodQuantity = tableQuantity * perTable;
    const bedWoodQuantity = bedQuantity * perBed;


    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const amountOfWood = woodCalculate(2,1,1);
console.log(amountOfWood);