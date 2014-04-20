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
	company  : "apple"
};

console.log(namecard.name);
