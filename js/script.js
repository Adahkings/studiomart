// Variables: let, const, var
/**
 * variables names should start with 
 * letters: a-z
 * underscore or dollar symbol, camelCase
 */ 
let containerOne = 'I am container one';
const pi = 3.142;
var containerTwo = 'I am container two';

let nameOfSchool = "University of Abuja"
let _name = "Jane Doe"
let $date = "New date is written here";

// let 55g = "New network"
let typeOne = 3.134
/**
 * string quotes '', "", ``
 * backticks are used in expressions with ${...}
 * */ 
let newString =  "Adah"
let schoolName = `Westfield College`
let available = true
let cupboard = ['cutleries', 'fruits', 'vegetables', 'bowls', 'plates']

// data types: null and undefined
let students = null;
let classes;


// console.log(typeOne)
// console.log('NAME: ', newString)
// console.log('NAME:' + ' ' + schoolName)
// console.log(`${newString} attends ${schoolName}`)
// console.log(containerTwo)
// console.log(cupboard[2])
// console.log(students)
// console.log(classes)



// let goodness = "Good"
// let goddess = "bad"

// console.log(goodness)
// console.log(goddess)
// console.log(`${goodness} is what we should be because ${goddess} can never pay anyone. It rather ruins.`)


// Javascript operators
let data1 = 6;
let data2 = '9';
let data;
let result;
let output;

// addition
// result = data1 + data2

let mean = 49
let mode = 7
result = mean / mode

console.log(result)

let x = 2 ** 3
console.log(x);

let no1 = 341
let no2 = 45
data = no1 * no2


let sub1 = 643648976
let sub2 = 37465
output = sub1 - sub2


//division
//result = mean 

// modulus or remainder %
result = data1 % data2
result = data1 >= data2

// comparison == & ===
result = data1 == data2
result = data1 === data2
// result = data1 !== data2
result = ! true

// Logical Operators: &&, ||, !
let anime;
let food = "beans"

if(anime == undefined && food == 'rice') {
    result = "Food has a value"
}
console.log(result);

if( !true && true && true ) {
    result = "AND needs both conditions to be true"
}
// OR - ||
// if( false || true ) {
//     result = 'OR only requires a true condition'
// }



// let num = 69

// if(num) {
//     // if condition is true, do this
//     result = 'thirty'
// } else {
//     // do this instead, if false
//     result = "Not equals"
// }

// if(num >= 70) {
//     // do this if true
//     result = 'grade A'
// } else if(num >= 60 && num < 70) {
//     result = 'grade B'
// } else {
//     result = 'grade C'


function getName() {
    return 'Adah'
}
// const variable = () => {}

const getNewName = () => 'Adah 2'

console.log(getName())
console.log(getNewName())  


let score = 45;
function getData(){
    if(score >= 70 && score <= 90) {
        result = 'Grade A'
    } else if(score >= 60 && score <= 69) {
        result = 'Grade B'
    } else if(score <= 59 && score >= 50) {
        result = 'Grade C'
    } else if(score >= 42 && score <= 49) {
        result = 'Grade D'
    } else { 
        result = 'Grade F'
    } 
}

getData()
console.log(result)



let availableCars = "This car is "
let cars = ["BMW", "Honda", "Toyata", "Bentley"]

// LOOPS
/**
 *  for loop...for(start, condition, steps){...}
 * while loop ... while(condition is true) { do this }
 *  do..while loop do{....} while(condition)
 * */
// let num = ""
// // i++ == i = i+1
// for(let s = 1; s < 10; s++){
//     num += "Number is: " + s + '<br/>'; 


let num = ""
// for(let n = 1; n <= 100; n++){
//     num += "My number is: " + n + '<br/>';
// } 
let n = 7

// while(n < 5) {
//     n++;
//     num += n
//     console.log('Hello', num)
// }

// do { 
//     alert('Hi')

// } while (n == 3);

document.getElementById("mode").innerHTML = num;
console.log(num);

//=====> FUNCTIONS

// const value = '';
// alert("Hello function!")
// prompt('What is your name', value)

function greet() {
    alert('Goodday, fellow developer...')
}







// console.log(availableCars);




// SWITCH CASE  
// switch(condition) {
//     case x:
//         // output result
//         break
//     case y:
//         // output result
//         break

//     case z:
//         // output result
//         break
        
//     default:
//         // return default

    
// }


let month = 3

switch(1) {

}


let day = 10
let dateOutput;

switch(1) {
    case 1:
        // output result
        console.log('Sunday')
        break
    case 2:
        // output result
        console.log('Monday')
        break

    case 3:
        // output result
        console.log('Tuesday')
        break
    case 4:
        // output result
        console.log('Wednesday')
        break
    case 5:
        // output result
        console.log('Thursday')
        break
    case 6:
        // output result
        console.log('Friday')
        break
    case 7:
        // output result
        console.log('Saturday')
        break
        
    default:
        // return default
        console.log('No day selected')
    
}





// console.log(result)
// console.log(data)
// console.log(output)