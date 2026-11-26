//Write a JavaScript function named reverseString that accepts a string as an argument
//  and returns
//the characters in reverse order. Call the function by passing "testleaf".

/*
1. Create a function named reverseString that accepts a string parameter.
2. Use a loop to read the input string from the last character to the first. Do not use the built-in
reverse() method.
3. Return the result string from the function.
4. Call the function by passing "testleaf" and print the returned value.
5. Test the same function with at least one additional string of your choice.
*/

//let stringText,revString
let revString
function reverseString(stringText){
revString=null
    console.log("Length of the string: "+stringText.length)
    console.log("The Original string is: "+stringText)
    for(i=stringText.length;i>=0;i--)
    {
       revString+=stringText[i]
    }
    return revString
}


reverseString("testleaf")
console.log("The Reversed string is: "+revString)
reverseString("palindrome")
console.log("The Reversed string is: "+revString)