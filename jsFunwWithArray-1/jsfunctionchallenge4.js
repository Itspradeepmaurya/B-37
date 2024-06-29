// You are responsible for managing student enrollment and generating statistics for a school using multilevel destructuring and other JavaScript concepts.
// Use this school object data for problem no. 10,11, 12, and 13

const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};




// Problem 10: countCalculation [1]
// Extract the mathTeachersCount,historyTeachersCount, mathStudentsCount, and historyStudentsCount using multilevel destructuring.

// define a countCalculation function that takes input as

// school
// countCalculation return an object with mathTeachersCount,historyTeachersCount, mathStudentsCount, and historyStudentsCount

// console.log(countCalculation(school))
//  Output: {  
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }

const countCalculation = (school) => {
    const { 
        departments : {
            math : {
                teachers : mathTeachersCount , 
                students : mathStudentsCount
            } , 
            history : {
                teachers : historyTeachersCount,
                students : historyStudentsCount
            } 
        } 
        } = school ;

        return {
            mathTeachersCount,
            mathStudentsCount,
            historyTeachersCount,
            historyStudentsCount
        } ;
    };

console.log(countCalculation(school));


// Problem 11: findTopStudent [1]
// findTopStudent that takes a course name as a parameter and finds the student with the highest score in that course using multilevel destructuring.

// define a findTopStudent function that takes input as

// school (Object)
// courseName (String)
// findTopStudent return a string as {topstudent object}

// console.log( findTopStudent(school, 'math'))
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }

const findTopStudent =  (school, courseName) => {
    const { students} = school;
    //to find the students with highest scores in the specoific course
    let topStudent = null;
    for ( const student of students) {
        const courseScore = student.scores[courseName];
        if ( !topStudent || courseScore > topStudent.scores[courseName]){
            topStudent = student;
        }
    }
    return topStudent;
}
const topmathStudent =  findTopStudent(school, 'math');
console.log(topmathStudent); 
    // {
    //   name: 'Alice',
    //   className: 'Grade 5',
    //   scores: { math: 95, science: 88, history: 85, english: 92 }
    // }






//     Problem 12: addNewDept [1]
// Use the spread operator to add new departments for example art with teachers and students to the school's departments.

// define an addNewDept function that takes input as

// school (Object)
// newDepartment (object)
// addNewDept return a school object with an updated department.

// console.log(addNewDept(school,newDepartment))

// Output = {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }
var addNewDept = (school, newDepartment) => {
    const updatedDepartments = { ...school.departments};
    updatedDepartments[newDepartment.name] = {
        teachers : newDepartment.teachers,
        students : newDepartment.students,
    };
    const updatedSchool = { ...school , departments : updatedDepartments};
    return updatedSchool;
}




const newDepartment = {
    name : 'art', 
    teachers : 2,
    students : 50,
};
const updatedSchool = addNewDept(school , newDepartment);
console.log(updatedSchool); 
//  Output = {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }










// Problem 14: Greeting Message [1]
// You are creating a JavaScript function to generate a personalized greeting message.

// Your task is to create a function generateGreeting that generates a greeting message for a given name and language.

// The function should have a default parameter for the language, which is set to English.

// Define a function generateGreeting that takes parameters name and language (default parameter: 'English').

// Create an object greetings that contains greeting messages for different languages. Include at least English, Spanish, and French.

// The function should return a formatted greeting message based on the provided name and language.

// define a generateGreeting function that takes input as

// name
// language (Default English)
// generateGreeting return string as follow

// console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
// console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
// console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

var generateGreeting = ( name , language = "English") => {
    const greetings = {
        English : `Hello , ${name}!`,
        Spanish : `!Hola , ${name}!`,
        French : `Bonjour , ${name}!`,
    }
    return greetings[language] || `Hello , ${name}!` ;
}

console.log(generateGreeting("Alice" )); // output : "Hello , Alice!"
console.log(generateGreeting("Bob" , "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie" , "French")); // output : "Bonjour, Charlie!"