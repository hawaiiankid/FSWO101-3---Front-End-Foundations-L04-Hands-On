class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}


class Manager extends Employee {
    constructor(name, hireDate, salary, descriptionOfJob) {
        super(name, hireDate, salary)
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because she manages the sales staff.");
    }
}
let manager = new Manager("Donna", 3 / 22 / 17, 80000, "Manager");
class Designer extends Employee {
    constructor(name, hireDate, salary, experience) {
        super(name, hireDate, salary)
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and has 20 years of experience");
    }
}
let designer = new Designer("Donna", 3 / 22 / 17, 80000, 20);
class SalesAssociate extends Employee {
    constructor(name, hireDate, salary, degree) {
        super(name, hireDate, salary)
        this.degree = degree;
    }
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and have completed my masters degree");
    }
}
let salesassociate = new SalesAssociate("Donna", 3 / 22 / 17, 80000, "Masters Degree");
manager.jobDescription();
designer.yearsExperience();
salesassociate.degreeCompleted();