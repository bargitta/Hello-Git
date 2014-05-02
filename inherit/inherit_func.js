'use strict'
var assert = require('assert');
//Douglas Crockford's way
function inherit(o){

	function F(){}
	F.prototype = o;
	return new F();
}

var product = {
			
	print: function(){
		return true;
	},
	setTitle: function(title){
		this.title = title;
	},
	getTitle: function(){
		return this.title;
	}
};

describe('inheritance', function() {

	it('book is a product -- Crockford', function(){
		

		var book = inherit(product);
		book.setTitle('abc')
		assert(book.print());
		assert.equal('abc', book.getTitle());
	});

	it('object create way', function(){
		var book = Object.create(product);
		book.setTitle('abc')
		assert(book.print());
		assert.equal('abc', book.getTitle());
	});

	it('object create way with params', function(){
		var book = Object.create(product,
			{
				test: {
					value: function(){
						return true;
					}
				}
			});
		book.setTitle('abc')
		assert(book.test());
		assert.equal('abc', book.getTitle());
	});
});

var mammal = function(spec){

	var that = {};
	that.getName = function(){
		return spec.name;
	};
	that.says = function(){
		return spec.saying;
	};
	return that;
};

var myMammal = mammal({name:'ele',saying:'tt'});
console.log(myMammal.says());
console.log(myMammal.getName());

var cat = function(spec){
	spec.saying = spec.saying || 'mm';
	var that = mammal(spec);
	that.weight = function(w){
		return w;
	};
	
	return that;
};

var myCat = cat({name:'kitty', saying:'a'});
console.log(myCat.says());
console.log(myCat.weight(20));
console.log(myCat.getName());