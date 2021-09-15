'use strict'
let musicStyle =['Джаз', 'Блюз'];
console.log(musicStyle);
musicStyle.push('Рок-Н-Ролл');
console.log(musicStyle);
console.log();
console.log('-------------------------------------');

musicStyle.splice(1,1,'Класика');
console.log(musicStyle);
console.log('-------------------------------------');
console.log(musicStyle.shift());
console.log(musicStyle);
console.log('-------------------------------------');
console.log(musicStyle.unshift('Реп','Реггі'));
console.log(musicStyle);