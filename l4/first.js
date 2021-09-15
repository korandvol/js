'use strict'
let arr = [-1,334,-64,5,66,0,-5,8585,-66,553,9,-44,869,84,-33,51,1,2,99,5.4];
console.log(arr);
console.log('-------------------------------------------');
arr.sort();
console.log(arr);
console.log('-------------------------------------------');
function sortMinMax(a,b){
	return a-b;
}
arr.sort(sortMinMax);
console.log(arr);
console.log('-------------------------------------------');
function sortMaxMin(a,b){
	return (-1)*(a-b);
}
arr.sort(sortMaxMin);
console.log(arr);
console.log('-------------------------------------------');
let positiveArr = arr.filter(function(number){
	return number>=0;
});
console.log(positiveArr);
console.log('-------------------------------------------');
let negativeArr = arr.filter(function(number){
	return number<0;
});
console.log(negativeArr);