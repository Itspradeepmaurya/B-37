// Function with Variables: Write a function subtract that takes two numbers as parameters and returns the result of subtracting the second number from the first number. Ensure that the function only performs subtraction if both parameters are numbers.
// Example Invocation: subtract(10, 5) Expected Output: 5

var subtractionOfNumbers=(a,b)=> {
    if ((typeof a === "number") && (typeof b === "number")){ //checking typeof of parameters
        var result = a - b;
        console.log(result);
    } else {
        console.log("Given parameters are not a number.");
    }
}
subtractionOfNumbers(100, 5)
subtractionOfNumbers(100, "apple")


// Handling Null and Undefined: Create a function greet that takes a first name, last name, and age as parameters. The function should return a greeting string mentioning the age of the person. Utilize template literals to compose the string. Include a conditional statement to handle cases where the age might not be available (i.e., undefined).
// Example Invocation: greet("John", "Doe", 30) Expected Output: "John Doe's age is 30."

var greet = (firstname, lastname, age) => {
    if (typeof age === "number"){                      //checking typeof of parameters
        console.log(`${firstname} ${lastname}s age is  ${age}.`)
    }else {
        console.log(`${firstname} ${lastname}s age is not available.`);
    }
}
greet("John", "Doe", 30)
greet("John", "Doe" )

// Utilizing Template Literals: Write a function interpolate that takes two numbers as parameters and returns a string with the sum of the numbers formatted as an equation. Use logical operators to ensure that both inputs are numbers.
// Example Invocation: interpolate(5, 3) Expected Output: "5 + 3 = 8"

var interpolate=(a,b)=> {
    if (( typeof a === 'number') && ( typeof b === 'number')) {           //checking typeof of parameters
        var c = a + b;
        console.log( typeof (`${a} + ${b} = ${c}`));
        console.log( `${a} + ${b} = ${c}`);
    } else {
        console.log("Given parameters must be a number.")
    }
}
interpolate(5, 3) 
interpolate(5, "banana")