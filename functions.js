// write a simple JavaScript function called multipy that takes two numbers as params and returns the result to the caller
function multiply (num1, num2) {
    let result = num1 * num2
    return result
}

let sum1 = multiply(20,30)
console.log(sum1)

let sum2 = multiply(20,20)
console.log(sum2)


// function multiply(num1, num2) {
//     return num1 * num2
// }

// let result = multiply(5,6)
// console.log(result)


// convert the function above to a variable

let multiply = function (num1, num2) {
    let result = num1 * num2;
    return result;
}

let sum1 = multiply )(20,5)
console.log(sum1)


// let multiply =  function (num1, num2) {
//     return num1 * num2
// }

// let result = multiply(5,6)
// console.log(result)


// convert the multiply fuction above to an arrow function


let multiply = (num1,num2) => (num1 * num2)
let results = multiply(5,6)
console.log(results)