
function Employee (name, title, salary) {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(this);
    }
}

var employees = [];

employees[0] = new Employee("Mike", "Worker", "5000k");
employees[1] = new Employee("George", "Boss", "50k");
employees[2] = new Employee("Sally", "Executive", "60k");
employees[2].status = "Part Time";

employees[2].printEmployeeForm();

console.log(employees);

