//prototype
//add create method to Object
//create a function whose prototype points to parent
if(typeof Object.beget !== 'function'){

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
console.log(msnamecard.__proto__);
// F {name: "mac", company: "apple", print: function}
// __proto__: Object
// 		company: "apple"
// 		name: "mac"
// 		print: function (){
// 		__proto__: Object

//change parent's behavior, will affect child's
namecard.trash = function(){
	this.obsolete = true;
	this.name = "invalid";
	this.company = "not available"
};

namecard.trash();
msnamecard.print();


