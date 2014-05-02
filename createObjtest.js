'use strict'
var assert = require('assert');

describe('object', function(){

	//use literal {} to create an object
	it('{}', function(){

		var product = {
			title: 'code first',
			price: 9.9
		};
		assert('code first', product.title);
		assert(9.9, product.price);
	});

	//use new key word
	it('new Object()',function(){
		var product = new Object();
		product.title = 'code first';
		product.price = 9.9;
		assert('code first', product.title);
		assert(9.9, product.price);
	});

});