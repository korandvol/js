'use strict'


function find(arr, value){
	
	for (var i = 0; i < arr.length; i++) 
	{
		
		if (value===arr[i]) {
			console.log('Index : '+i);
		} 
		else {
			console.log('Index: "-1"');
		}
	}
}




let arr =[1,2,3];
console.log(arr);
find(arr, 3);
 