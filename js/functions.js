function meet () {
    console.log ('My oga se make I bring my aza')
}
// meet()

// Function variable scope
const globalVariable = 'Global'
function getScope() {
    const localVariable = "Local";

    console.log(globalVariable)
    // console.log(localVariable)
}
// console.log(localVariable)
// getScope()


// function add(value1, value2) {
//     let sum;
//     sum = value1 + value2;
//     console.log(sum)


// 70 and 100 etc are the arguments
// add(70, 100)
// add(10, 700)
// add(56, 90)
// add(800, 79)


function multiply(value1, value2, value3 = 2) {
    let multiply;
    multiply = value1 * value2 * value3;
    console.log(multiply)
}

// multiply(5, 5, 10)
// multiply(23, 9, 8)
// multiply(68, 10, 11)


function sub(value1, value2, value3, value4) {
    let sub;
    sub = value1 - value2 - value3 - value4;
    console.log(sub)
}
// sub(233, 100, 36, 14)
// sub(45, 10, 30, 0)
// sub(50, 6, 40, 10)

function getData() {
    return 'Hello, returning from a function'
}

function returnAdd2(num1, num2) {
    let sum;
    sum = num1 + num2; 
    console.log(sum)
}
function returnAdd(num1, num2) {
    return num1 + num2;
}
console.log(returnAdd(2, 4))
console.log(returnAdd2(2, 4))

// alert(returnAdd2(4,5))

console.log(getData())
getData()