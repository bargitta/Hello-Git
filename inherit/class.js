'use strict';
var assert = require('assert');

function Product(title){
	this.title = title;
};
Product.prototype.save = function(){
	return true;
};

function Book(title){
	Product.call(this, title);
};
//prototype is an object with many properties, not a function
//method 1
//Book.prototype = new Product(); 

//method 2, bad effect, children will change parent's behavior
//book can publish, then product can publish
//Book.prototype = Product.prototype;

//method 3, add another layer intermediate, just copy the prototype
//difference between method 1 and 3, 1 will create an object will all parent's properties
//3 will only have prototype

function intermediate() {};
intermediate.prototype = Product.prototype;
Book.prototype = new intermediate();
Book.prototype.constructor = Book;
Book.super = Product.prototype;//can have polymorphism, children can have call parent's functions
Book.prototype.publish = function(){
	return true;
}
describe('PrototypeChaining', function() {

	it('book is a product', function(){
		var book = new Book('good parts');
		assert.equal('good parts', book.title);
	});

	it('book can publish', function(){
		var book = new Book('good parts');
		assert(book.publish);
	});
	
	it('product cannot publish', function() {
        var pear = new Product();
        assert(!pear.publish);
    });

	it('product can save', function() {
        var pear = new Product();
        assert(pear.save());
    });

    it('book can save', function() {
        var book = new Book();
        assert(book.save());
    });
});