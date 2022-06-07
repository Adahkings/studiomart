const log = function compare (num1 = 44, num2 = 23) {
    // let output;
    
    if(num1 > num2) { 
       return `${num1} is greater than ${num2}` 

    }else{
       return `${num2} is greater than ${num1}`
    }

}
// const log = compare(4, 23) 

// let abc = function getAbc() {...}
console.log(log())


let value = 40;
function getGrades(value = 40) {
   if(value = 45) {
      return 'They are equal'

   }else if(value = 40) {
      return `This is the ${value}`

   }else{
      return false
   }
}
console.log(getGrades())