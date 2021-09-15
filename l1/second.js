'use strict'


let login = "bit";
let password = 333;

if (!login) {
	console.log('I dont know you');
}
else {
	if(login&&!password){
		console.log('Wrong pasword');
	}
	else if (login&&password) {
		console.log('Welcome');
	}
	else if (!login&&!password) {
		console.log('Cancelled');
	}

}