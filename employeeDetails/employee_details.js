const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  { id: 4, name: 'Sarah Williams', age: 40, department: 'Marketing', salary: 52000 },
  { id: 5, name: 'David Brown', age: 25, department: 'IT', salary: 48000 },
  { id: 6, name: 'Emily Davis', age: 32, department: 'HR', salary: 46000 },
  { id: 7, name: 'Michael Wilson', age: 38, department: 'Finance', salary: 62000 },
  { id: 8, name: 'Jessica Taylor', age: 29, department: 'IT', salary: 49000 },
  { id: 9, name: 'Daniel Martinez', age: 36, department: 'Marketing', salary: 54000 },
  { id: 10, name: 'Laura Anderson', age: 27, department: 'HR', salary: 47000 },
  { id: 11, name: 'James White', age: 33, department: 'Finance', salary: 58000 },
  { id: 12, name: 'Patricia Harris', age: 41, department: 'IT', salary: 51000 },
  { id: 13, name: 'Robert Clark', age: 26, department: 'HR', salary: 44000 },
  { id: 14, name: 'Linda Lewis', age: 34, department: 'Finance', salary: 61000 },
  { id: 15, name: 'Charles Young', age: 37, department: 'Marketing', salary: 53000 },
  { id: 16, name: 'Barbara Walker', age: 31, department: 'IT', salary: 47000 },
  { id: 17, name: 'Steven Hall', age: 39, department: 'HR', salary: 48000 },
  { id: 18, name: 'Susan King', age: 28, department: 'Finance', salary: 59000 },
  { id: 19, name: 'Andrew Wright', age: 35, department: 'Marketing', salary: 55000 },
  { id: 20, name: 'Margaret Scott', age: 30, department: 'IT', salary: 50000 },
  { id: 21, name: 'Edward Turner', age: 29, department: 'HR', salary: 46000 },
  { id: 22, name: 'Jennifer Adams', age: 38, department: 'Finance', salary: 62000 },
  { id: 23, name: 'Thomas Baker', age: 33, department: 'Marketing', salary: 54000 },
  { id: 24, name: 'Elizabeth Nelson', age: 40, department: 'IT', salary: 51000 },
  { id: 25, name: 'Christopher Carter', age: 25, department: 'HR', salary: 44000 },
  { id: 26, name: 'Mary Mitchell', age: 36, department: 'Finance', salary: 60000 },
  { id: 27, name: 'Joseph Perez', age: 34, department: 'Marketing', salary: 53000 },
  { id: 28, name: 'Nancy Roberts', age: 31, department: 'IT', salary: 48000 },
  { id: 29, name: 'Kevin Phillips', age: 39, department: 'HR', salary: 47000 },
  { id: 30, name: 'Karen Evans', age: 28, department: 'Finance', salary: 61000 },
  { id: 31, name: 'Jason Edwards', age: 37, department: 'Marketing', salary: 56000 },
  { id: 32, name: 'Betty Collins', age: 29, department: 'IT', salary: 50000 },
  { id: 33, name: 'Brian Campbell', age: 35, department: 'HR', salary: 45000 },
  { id: 34, name: 'Dorothy Stewart', age: 41, department: 'Finance', salary: 63000 },
  { id: 35, name: 'Scott Sanchez', age: 32, department: 'Marketing', salary: 54000 },
  { id: 36, name: 'Carol Morris', age: 27, department: 'IT', salary: 47000 },
  { id: 37, name: 'Mark Rogers', age: 30, department: 'HR', salary: 46000 },
  { id: 38, name: 'Helen Reed', age: 38, department: 'Finance', salary: 62000 },
  { id: 39, name: 'Paul Cook', age: 34, department: 'Marketing', salary: 55000 },
  { id: 40, name: 'Sandra Morgan', age: 33, department: 'IT', salary: 49000 }
];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}