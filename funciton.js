function party(taka){
    var partyPrice = 100;
    return taka / partyPrice;
}

var money = 200;
var partyQuantity = party(money)
console.log(partyQuantity);