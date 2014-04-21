// two ways to create a function
//1. literal

var add = function (a,b){
	return a + b;
};

//method invocation pattern
//function is a property of an object
var talk = {
	content: 'content',
	start: function(input){
		this.content = input;
		console.log(this.content);
	},
	end: function(){
		this.content = '';
		console.log('end');
	},
	memo: function(){
		console.log(this.content);
	}
};

//talk.start('avc');//this points to talk
//talk.end();

//function invocation pattern
var rusult = add(3,4);//this points to global


//use inner function
talk.interrupt = function(){

	var call = function(){
		this.content = '1234';
	};
	call();//this points to global
};

talk.interruptInner = function(){
	var that = this; //cache this
	var call = function(){
		that.content = '1234';
	};
	call();
};

talk.interrupt();
talk.memo();
talk.interruptInner();
talk.memo();
