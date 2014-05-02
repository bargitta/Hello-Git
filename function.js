// two ways to create a function
//1. literal

var add = function (a,b){
	return a + b;
};

//Four function invocation patterns
//#1. method invocation pattern
//function is a property of an object
var talk = {
	content: 'content',
	start: function(input){
		if(input){
			this.content = input;
		}
		console.log(this.content);
		return this;
	},
	end: function(){
		this.content = '';
		console.log('end');
	},
	memo: function(){
		console.log(this.content);
	}
};

//this points to talk，use as a method
talk.start('method invocation');



//#2. function invocation pattern
//this points to global
var talkstart = talk.start;
talkstart();//global has no content definition
talkstart('function invocation');//set global content



//#3. use call or apply
var method = talk.start;
//this points to talk
method.call(talk,'use call');

var anotherObj = {content:'another method'};
//this points to anotherObj,content is 'another method'
method.call(anotherObj,'');
talk.start.call(anotherObj,''); //line 47===48
method.apply(anotherObj, []);
method.apply(anotherObj, ['use apply']);

//#4. use a constructor
//the new key word returns a new object with
//a constructor points to the talk.start function
var constructorMethod = new talk.start('constructor');
console.log(constructorMethod.content);

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
