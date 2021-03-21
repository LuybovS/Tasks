/*Вариант 6
//Напиши функцию, считающую число свойств в объекте:
var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () {};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1*/
var a = { a: 1, b: 2 };
var b = function () {};
var c = [1, 2, 3];
var d = [];
d [100] = 1;
function countРroperties(object){
   num = 0;
   for (var prop in object){
      num++;
   }
   console.log(num);
}
countРroperties (a);
countРroperties (b);
countРroperties (c);
countРroperties (d);