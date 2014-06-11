//expression

var josh = {
	year: '1999-01-31',
	color: 'blue', 
	weight: 12
}

console.assert(josh.year);
delete josh.color;
console.assert(josh.color === undefined);

//falsy values in javascript
//undefined, 0, NaN, false, '', null

console.assert(typeof(NaN) === 'number')
console.assert(typeof(Infinity) === 'number')

//logical operators 
//&& 
//when the first operator is false, return the first
//when the first is true, return the second
var a = true && true;
var b = true && false;
var c = false && false;
var d = false && true;

console.assert(a);
console.assert(!b);
console.assert(!c);
console.assert(!d);

var e = 0 && 'a';
console.assert(!e);

var d = 'a'&&'b';
console.assert(d === 'b');

//operator ||
//when the first is true, return the first, otherwise return the second
d = 'a' || 'b';
console.assert(d === 'a');
d = '' || 'a';
console.assert(d === 'a');


