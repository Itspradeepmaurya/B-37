// Employee Information: Define a function employeeInformation that takes an array of employee objects, 'employees', as a parameter. Extract the name and department of the second employee in the array and assign them to variables 'secondEmployeeName' and 'secondEmployeeDepartment'. Return an object with 'secondEmployeeName' and 'secondEmployeeDepartment'.
// //Example Invocation:
// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

var employeeInformation= (employees) => {
    if (employees.length >= 2 ) {
        const secondEmployee = employees[1];
        const { name : secondEmployeeName , department : secondEmployeeDepartment } = secondEmployee;
        return { secondEmployeeName , secondEmployeeDepartment };
    } else {
        return{};
    }
}


const employees = [
      { name: "John Doe", age: 30, department: "HR", salary: 50000 },
      { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
      { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    ];
console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }


// Average Salary: Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.
// //Example Invocation:

// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// console.log(averageSalary(employees)); // Output: 60000


var averageSalary = (employees2) => {
     let totalSalary = 0;
     for ( const {salary} of  employees2) {
        totalSalary += salary;
     }
     return employees2.length > 0 ? totalSalary / employees2.length : 0;
}


var employees2 = [
      { name: "John Doe", age: 30, department: "HR", salary: 50000 },
      { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
      { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    ];
    
    console.log(averageSalary(employees2)); // Output: 60000
    

// Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'. Calculate a bonus of 10% on the salary. Return a string in the format "Employee: , Age: , Salary: , Bonus: ".
// //Example Invocation:

// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"

var thirdEmployeeInfo = (employees3) => {
    if (employees3.length >= 3) {
        const { name : thirdEmployeeName , age : thirdEmployeeAge , salary : thirdEmployeeSalary } = employees[2];
        const bonus = thirdEmployeeSalary * 0.10 ;
        return `Employee : ${thirdEmployeeName} , age : ${thirdEmployeeAge} , ${thirdEmployeeSalary} , Bonus : ${bonus} `;
    } else {
        return "Not enough employees.";
    }
}


const employees3 = [
      { name: "John Doe", age: 30, department: "HR", salary: 50000 },
      { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
      { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    ];
    
    console.log(thirdEmployeeInfo(employees3)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"




