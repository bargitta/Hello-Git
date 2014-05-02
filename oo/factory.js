'use strict';

var assert = require('assert');

function Product(){}

function createProduct(title, price){
	var o = {};
	o.title = title;
	o.price = price;
	o.constructor = Product;
	return o;
}

//test
describe('factory method', function(){
	it('should return product', function(){

		var product = createProduct('cherry',90);
		assert('cherry', product.title);
		assert(90, product.price);
		assert(Product, product.constructor);
		assert(product instanceof Object); //not an instance of Product
	});

});