//prototype is good for reuse functions, and shared properties
'use strict';
var assert = require('assert');

var baseObject = {
    title: 'berry',
    price: 38,
    save: function() {
        return true;
    }
};

function Product(){}

Product.prototype = baseObject;
Product.prototype.constructor = Product;

describe('prototype', function() {
    it('should return Product object', function() {
        var product = new Product();
        assert.equal('berry', product.title);
        assert.equal(38, product.price);
        assert(product.save());
        assert(Product.prototype, product.__proto__, baseObject);
    });
});