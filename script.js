console.log('js');
var employeeArray = [];

function Employee(name, employeeNumber, annualSalary, reviewRating){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
} //end Employee constructor

var worker = new Employee('John', '3412', 65000, 4);

function EmployeeBonus(name, bonusPercentage, totalCompensation, totalBonus){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
}

function calcBonus (employee){
    if (employee.reviewRating <= 2){
        var bonusRate = 0;
    }else if (employee.reviewRating === 3){
        var bonusRate = .04;
    }else if (employee.reviewRating === 4){
        var bonusRate = .06;
    }else if (employee.reviewRating === 5){
        var bonusRate = .1;
    };

    if (employee.employeeNumber.length === 4){
        bonusRate += .05;
    }

    if (employee.annualSalary > 65000 && bonusRate >= .01){
        bonusRate -= .01;
    }

    if (bonusRate > .13){
        bonusRate = .13;
    }

    return bonusRate;
}
