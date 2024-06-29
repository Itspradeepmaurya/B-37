// Object Factory Function: Write a function objectFactory that takes a first name 'fname' and an age 'age' as parameters. The function should return an object with 'fname' as the key and 'age' as the value. Ensure that the age is coerced to a number before being assigned to the object.
// Example Invocation: objectFactory("John", "25") Expected Output: { John: 25 }

var objectFactory = (fname, age) => {
    var ageAsNumber = +(age);
    if ( !isNaN(ageAsNumber)){
        var objectvalue = {};
        objectvalue[fname] = ageAsNumber;
        console.log(objectvalue)
    } else{
        console.log(null,"age value is not valid.")
    }
    }
    objectFactory("John" , "25"); // output : {john : 25}
    objectFactory("John" , "thirty");//null age value is not valid.


//     Grade Classifier Function: Write a function gradeClassifier that takes a student's score 'score' out of 100 as a parameter. The function should return a grade based on the score range. Include logical operators to handle exceptional cases such as invalid input or score exceeding 100.
// Example Invocation: gradeClassifier(85) Expected Output: "B"
const gradeClassifier = (score) => {
    if ( typeof score !== "number" || isNaN(score)) {
        return "not a valid number!"
    } else if ( score < 0 || score > 100) {
       return "score must be in a range between 0 to 100."        
    } else if ( score >= 85) {
        return "A"
    } else if ( score < 85 && score >= 65 ) {
        return "B"
    } else if ( score  < 65  && score >= 45 ) {
        return "C"
    } else if ( score < 45 && score >= 35 ){
        return "D"
    } else {
        return "You have to repeat the same class again"
    }
}
console.log(gradeClassifier(101)); // score must be in a range between 0 to 100.

console.log(gradeClassifier(-1));  // score must be in a range between 0 to 100.
console.log(gradeClassifier("Hundred")); //not a valid number!
console.log(gradeClassifier(85));   // A
console.log(gradeClassifier(70));   // B
console.log(gradeClassifier(55));   // C 
console.log(gradeClassifier(40));   // D
console.log(gradeClassifier(10)); // You have to repeat the same class again



// String Manipulator Function: Write a function stringManipulator that takes two strings 'str1' and 'str2' as parameters. The function should concatenate the strings if their lengths are equal; otherwise, it should append the shorter string to the end of the longer string. Ensure both inputs are strings and handle cases where either or both inputs are empty strings.
// Example Invocation: stringManipulator("hello", "world") Expected Output: "helloworld"

var stringManipulator = (str1 , str2 ) => {
    //check if both inputs are strings
    if ( typeof str1 !== 'string' || typeof str2 !== 'string' ){
        return "Both input must be strings."
    }
    // handle empty strings.
    if ( str1 === "" && str2 === "") {
        return "both strings are empty!";
    } else if ( str1 === "") {
        return str2;
    } else if ( str2 === "") {
        return str1;
    } 
    //concatinating or appending based on string length
    if ( str1.length === str2.length) {
        return  (str1.concat(str2));
    } else if ( str1.length > str2.length) {
        return str1 + str2;
    } else if ( str1.length < str2.length ) {
        return str2 + str1 ;
    }
}

console.log(stringManipulator("hello", "world")); // Output: "helloworld"
console.log(stringManipulator("", "")); // Output: "both strings are empty!"
console.log(stringManipulator(50 , "apple")); // Output: "Both input must be strings."
console.log(stringManipulator("apple" , 100)); // Output: "Both input must be strings."
console.log(stringManipulator("apple" , "")); // Output: apple
console.log(stringManipulator("" ,"banana" )); // Output: banana
console.log(stringManipulator("one" ,"two" )); // Output:onetwo 
console.log(stringManipulator("three" ,"two" )); // Output:threetwo
console.log(stringManipulator("four" , "three" )); // Output:threefour
