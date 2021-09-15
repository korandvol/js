'use strict'
function makeBuffer(){
	let text ='';
	
	return function(value){
		if (arguments.length == 0) {
			return text;
		}
		text+=value;
	}
	
}
var buffer = makeBuffer(); 
buffer('JavaScript');
buffer(' Вчити');
buffer(' Потрібно!');
console.log(buffer());
console.log('---------------------------------');

var buffer2 = makeBuffer(); 
buffer2(0);
buffer2(1);
buffer2(0);
console.log(buffer2());