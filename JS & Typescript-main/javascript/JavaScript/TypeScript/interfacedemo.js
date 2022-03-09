var emp = { 'name': 'Govind', 'age': 45, 'salary': 80000, 'city': 'Bellary' }; //Here the object or interface is not invoked
//it will accept any variables
console.log(emp.city);
var emp1 = { 'name': 'Ramraj', 'age': 54, 'salary': 76000 }; //this will invoke interface variables
//Json will accept only the variables which are declared in the interface
var emp2 = {
    'name': 'Suvarna',
    'age': 22,
    display: function () {
        return "Hi this is Employee 2";
    }
}; // here salary variable is optional
console.log('-----------------');
console.log('Employee Name :' + emp1.name);
console.log('Employee Age :' + emp1.age);
console.log('Employee Salary :' + emp1.salary);
console.log('-----------------');
console.log('Employee Name :' + emp2.name);
console.log('Employee Age :' + emp2.age);
console.log('Employee Details :' + emp2.display());
