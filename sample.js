/*let name="sam";
console.log(name);
*/

/*sort method- built in sort method
const alphaArray = ["zebra","arial", "medium"];
const alphaArray2 = ["zebra","arial", "medium", 3, 1, 1000];

const alphaSort = (array) => {
    if (!array.length) return;
    return array.sort();
}

console.log(alphaSort(alphaArray));
//(3) ['arial', 'medium', 'zebra']
console.log(alphaSort(alphaArray2));
//[1, 1000, 3, 'arial', 'medium', 'zebra']
//built in methods will not sort numbers properly
*/

//for number
/* ascending order
const arrayOfNumbers = [1,2344,322,21,555,4];
const numberSortAsc = (array)=> {
    if (!array.length) return;
    return array.sort((a,b) => a-b);
}

console.log(numberSortAsc(arrayOfNumbers));
//[1, 4, 21, 322, 555, 2344]
*/

/* descending order we add reverese()
const arrayOfNumbers = [1,2344,322,21,555,4];
const numberSortDes = (array)=> {
    if (!array.length) return;
    return array.sort((a,b) => a-b).reverse();
}

console.log(numberSortDes(arrayOfNumbers));
//(6) [2344, 555, 322, 21, 4, 1]
*/

//strings and numbers in array
const arrayNumAndString = [1,10000,23,44,2,'a','cat','boy']












