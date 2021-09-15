'use strict'

function tC() {
	alert('Connection is good');
	console.log('Everything clicks!');
}

function valueCalc() {

	var elements = document.getElementsByTagName('li');
	for (var i = 0; i < elements.length; i++) {
		alert('Всього елементів li -' + elements.length);

		return 1;
	}

}

function addValues() {
	const list = document.querySelector('ul');

	var ulElem = document.getElementById('ul');
	var elements = ulElem.getElementsByTagName('li');

	for (var i = 0; i < elements.length; i++) {
		var li = elements[i];
		li.innerHTML = 'First added text';

	}
}
function addSValues() {
	const list = document.querySelector('sul');

	var ulElem = document.getElementById('sul');
	var elements = ulElem.getElementsByTagName('li');

	for (var i = 0; i < elements.length; i++) {
		var li = elements[i];
		li.innerHTML = 'Second added text';

	}
}
function addTValues() {
	const list = document.querySelector('tul');

	var ulElem = document.getElementById('tul');
	var elements = ulElem.getElementsByTagName('li');

	for (var i = 0; i < elements.length; i++) {
		var li = elements[i];
		li.innerHTML = 'Third added text';

	}
}