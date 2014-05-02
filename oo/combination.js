'use strict';

var assert = require('assert');

function Product(title, price){
	this.title = title;
	this.price = price;
}

//shared things put in prototype
Product.prototype = {

	constructor: Product,
	save: function(){
		return true;
	}
};

describe('combination of prototype and constructor', function(){
	it('should return a product instance', function(){
		var apple = new Product('apple',2);
		assert(apple instanceof Product);
		assert(apple.save);
		assert(apple.__proto__, Product.prototype);
	});

});