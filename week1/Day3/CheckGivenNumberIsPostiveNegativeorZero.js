//Create a JavaScript function that determines if a number is positive, negative, or zero
//  and returns a corresponding string indicating the type.


/*
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
*/

let number
function checkGivenNumber(number){
if(number > 0){
console.log("The Given number " +number+ " is Positive");
}else if(number < 0){
console.log("The Given number " +number+ " is Negative");
}else if(number === 0){
  console.log("The Given number " +number+ " is Zero");  
}else{
    console.log("Invalid Number");
}
}

checkGivenNumber(10)
checkGivenNumber(-15)
checkGivenNumber(0)
checkGivenNumber(151)
checkGivenNumber(0)
checkGivenNumber(-60)
checkGivenNumber('abc')