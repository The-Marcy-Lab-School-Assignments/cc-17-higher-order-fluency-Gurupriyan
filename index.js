//write your code here
//1
function pluralize (array) {
    return array.map(element => element += "s");
}
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
// console.log(pluralize(animals));

//2
const upperCase = array => {
    return array.map(element => element.substring(0, 1).toUpperCase() + element.slice(1));
}
// console.log(upperCase(animals));

//3
function longWords (array) {
    return array.filter(element => element.length > 3);
}
// console.log(longWords(animals));

//4
function shortWords (array) {
    return array.filter(element => element.length < 5);
}
// console.log(shortWords(animals));

//5
function oddLength (array) {
    return array.filter(element => element.length % 2 === 1);
}
// console.log(oddLength(animals));

//6
function longToShort (array) {
    return array.sort((a, b) => a.length - b.length).reverse();
}
// console.log(longToShort(animals))

//7
function sum (array) {
    return array.reduce((a, b) => a + b);
}
// const numbers = [22, 15, 1114, 416, 37, 4]
// console.log(sum(numbers)) // 1608

