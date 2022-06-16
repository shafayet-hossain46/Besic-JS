// Count book pages as required.
function pageRequirement(book1, book2, book3) {
    let bookOne = 100;
    let bookTwo = 200;
    let bookThree = 300;

    // Calculating the Pages needed.
    let bookOnePages = book1 * bookOne;
    let bookTwoPages = book2 * bookTwo;
    let bookThreePages = book3 * bookThree;


    // Total Pages Needed.
    let totalPages = bookOnePages + bookTwoPages + bookThreePages;
    return totalPages;
}

let totalPagesNeeded = pageRequirement(1,2,3);
console.log(totalPagesNeeded);