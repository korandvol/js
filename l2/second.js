'use strict'

let employeeSalaries ={
    "pupkinsSalary" : 0,
	"myachSalary" : 0,
	"berkSalary" : 0,
};

console.log(employeeSalaries);
console.log();
console.log(employeeSalaries.pupkinsSalary+employeeSalaries.myachSalary+employeeSalaries.berkSalary);
console.log();

let salarySum = employeeSalaries.pupkinsSalary+employeeSalaries.myachSalary+employeeSalaries.berkSalary;
if (salarySum != 0 ) {
	console.log('Зарплата усіх працівників рівна: ' + salarySum);
}else{
	console.log('Зарплатня усіх працівників рівна нулю!');
}

console.log();

let secondemployeeSalaries ={
	    "spupkinsSalary" : 1550,
		"smyachSalary" : 323,
		"sberkSalary" : 121,
	};

	console.log(secondemployeeSalaries);
	console.log();
	console.log(secondemployeeSalaries.spupkinsSalary+secondemployeeSalaries.smyachSalary+secondemployeeSalaries.sberkSalary);
	console.log();

	let secondsalarySum = secondemployeeSalaries.spupkinsSalary+secondemployeeSalaries.smyachSalary+secondemployeeSalaries.sberkSalary;
	if (secondsalarySum != 0 ) {
		console.log('Зарплата усіх працівників рівна: ' + secondsalarySum);
	}else{
		console.log('Зарплатня усіх працівників рівна нулю!');
	}