//use prototype to implement inheritance
//add create method to Object
//create a function whose prototype points to parent
if(typeof Object.create !== 'function'){

	Object.create = function(parent){

		var F = function() {};
		F.prototype = parent;
		return new F();
	}
}

//use literal
var namecard = {
	name : "mac",
	company  : "apple",
	print: function(){
		console.log('name is ' + this.name + ', and company is '+ this.company)
	}
};

//namecard.print();

var msnamecard = Object.create(namecard);
//console.log(msnamecard.__proto__);
//output
// F {name: "mac", company: "apple", print: function}
// __proto__: Object
// 		company: "apple"
// 		name: "mac"
// 		print: function (){
// 		__proto__: Object

msnamecard.name = 'ms';
msnamecard.company = 'mrsf'

msnamecard.print();
delete msnamecard.name;
msnamecard.print();//delete the property will use the prototype's

//change parent's behavior, will affect child's
namecard.trash = function(){
	this.obsolete = true;
	this.name = "invalid";
	this.company = "not available"
};

namecard.trash();
msnamecard.print();

msnamecard.trash();
msnamecard.print();
namecard.print();
