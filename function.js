// two ways to create a function
//1. literal

var add = function (a,b){
	return a + b;
};

//method invocation pattern
//function is a property of an object
var talk = {
	content: '',
	start: function(input){
		this.content = input;
		console.log(this.content);
	},
	end: function(){
		this.content = '';
		console.log('end');
	}
};

talk.start('avc');
talk.end();

//