//the constructor invocation pattern
//use new keyword
//this points to the newly created object
//not recommended by douglas crockford
var Quo = function(input){
	this.status = input;
};

Quo.prototype.get_status = function(){
	return this.status;
};

var quo1 = new Quo('avc');
console.log(quo1.get_status()); 

//the apply invocation pattern
var add = function(a,b){
	return a+b;
}

//var total = add.apply(null,[4,3]);
//console.log(total);

var fakequo = {
	status:'ok'
};
var ouput1 = Quo.prototype.get_status.apply(fakequo);//work
var ouput2 = quo1.get_status.apply(fakequo);//work
console.log(ouput1);
console.log(ouput2);