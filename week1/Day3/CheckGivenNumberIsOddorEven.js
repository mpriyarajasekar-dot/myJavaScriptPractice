//Write a JavaScript function named `isOddOrEven` that takes an integer as input 
// and returns `Odd` if the number is odd and `"Even"` if the number is even


/*
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
*/

let number
function isOddOrEven(number){
if(number%2===0)
console.log("The Given number " +number+ " is Even");
else
console.log("The Given number " +number+ " is Odd");
}
isOddOrEven(10)
isOddOrEven(15)
isOddOrEven(100)
isOddOrEven(151)
isOddOrEven(170)
isOddOrEven(60)