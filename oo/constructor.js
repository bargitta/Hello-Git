//constructor is good for reuse properties, functions are duplicated copies
'use strict';
var assert = require('assert');

function Product(title, price){
	this.title = title;
	this.price = price;
	this.save = function(){};
}

describe('use constructor to create objs',function(){
	it('should return Product objs', function(){
		var apple = new Product('apple', 23);
		assert('apple', apple.title);
		assert(23, apple.price);
		assert(apple instanceof Product); 
		assert(Product, apple.constructor); //the constructor is the Product function
		assert('Object', typeof apple);
	});

	it('duplicate functions of Product instances', function(){
		it('', function(){
			var apple = new Product('apple', 1);
			var pear = new Product('pear', 2);
			assert(apple.save !== pear.save);
		});
	});

	it("function's prototype", function(){
		it("a function's prototype's constructor points to the function", function(){
			assert(Product, Product.prototype.constructor);
		});
	});
});

