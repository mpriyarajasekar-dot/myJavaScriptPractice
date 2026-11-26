//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser 
// launch messages, and `runTests` with `switch` for test type messages.

/*
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript
*/
let browserName,testType

function launchBrowser(browserName){
if(browserName==='Chrome')
    console.log("The Browser name is Chrome")
else if(browserName==='FireFox')
    console.log("The Browser name is Firefox")
else if(browserName==='Edge')
    console.log("The Browser name is Edge")
else
    console.log("Not a valid Browser")
}

function runTests(testType){
    switch (testType){
        case "Smoke":
                    console.log("Run type is Smoke")
                    break
        case "Sanity":
                    console.log("Run type is sanity");
                    break
        case "Regression":
                    console.log("Run type is regression");
                    break
        case "Negative":
                    console.log("Run type is Negative");
                    break
        default:
                    console.log("Invalid RunType");
                    break

    }


}

launchBrowser("Chrome")
runTests("Smoke")
launchBrowser("Edge")
runTests("Regression")
launchBrowser("Browser")
runTests("Runtype")