// Problem 1: Factorial Calculation
// Write a function calculateFactorial that takes a positive integer as input and returns its factorial. Ensure that the function handles invalid inputs gracefully.

// Example:

// console.log(calculateFactorial(5)); // Expected Output: 120
const  calculateFactorial = (num) => {
    if ( typeof num === 'number' && num > 0 ) {
        if ( num === 0){
            return 1;
        } else if  ( num === 1) {
            return 1;
        } else {
             return (num * calculateFactorial(num-1));
        }
    } else {
         return "Please enter a valid positive integer as  input.";
    }
}
console.log(calculateFactorial(5)); //120
console.log(calculateFactorial("one")) // "Please enter a valid input."
console.log(calculateFactorial(-10)) // "Please enter a valid input."

// Problem 2: Prime Number Checker
// Implement a function isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise. Utilize logical operators and looping constructs efficiently.

// Example:

// console.log(isPrime(7)); // Expected Output: true
// console.log(isPrime(10)); // Expected Output: false

var isPrime = (num) => {
    if ( num <= 1 || typeof num  !== 'number') {
        return false;
    } else {
        for ( let i=2;i<Math.sqrt(num); i++ ){
            if ( num % i == 0) {
                return false;
            } 
        }
        return true;
    }
}
console.log(isPrime(7)); // Expected Output: true
console.log(isPrime(10)); // Expected Output: false
console.log(isPrime('one')); // Expected Output: false


// Problem 3: Longest Palindrome in Array
// Write a function findLongestPalindrome that takes an array of strings as input and returns the longest palindrome string found in the array. If no palindrome is found, return an appropriate message.

// Example:

// var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
// console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"



var isPallindrome = (str) => {
   return str === str.split('').reverse().join('');
}
var findLongestPallindrome = (strings) => {
    let longestPallindrome = "";
    for ( let i=0;i<strings.length;i++){
        if ( isPallindrome(strings[i]) && strings[i].length > longestPallindrome.length) {
            longestPallindrome = strings[i];
        }
    }
    if (  longestPallindrome) { 
        return longestPallindrome;
    } else {
        return "No Pallindrome Found!";
    }
}
var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
console.log(findLongestPallindrome(strings)); // Expected Output: "racecar"
var strings = [ "noonabc", "hello", "racecare", "JavaScript"];
console.log(findLongestPallindrome(strings)); // Expected Output:"No Pallindrome Found!"


// Problem 4: Unique Characters Counter
// Create a function countUniqueCharacters that takes a string as input and returns the count of unique characters present in the string. Ignore case sensitivity while counting.

// Example:

// console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)

const countUniqueCharacters = (str) => {
    const charSet = new Set();
    const normalStr = str.toLowerCase();
    for ( const char of normalStr){
        if ( char.match(/[a-z]/)){
            charSet.add(char);
        }
    }
    return charSet.size;
}
console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)