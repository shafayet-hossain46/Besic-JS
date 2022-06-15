const phones = [
    { name: "Walton", price: 20000, storage: 8 },
    { name: "Iphone", price: 100000, storage: 120 },
    { name: "Samsung", price: 60000, storage: 60 },
]
let cheapest = phones[0]
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone
    }
}
console.log(cheapest);