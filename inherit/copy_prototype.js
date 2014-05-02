'use strict';
var assert = require('assert');
var product = {
    title: 'a',
    price: 32,
    save: function() {
        return true;
    }
};

var book = {};
for (var attr in product) {
    if (product.hasOwnProperty(attr)) {
        book[attr] = product[attr];
    }
}

describe('prototype inherit', function() {
    it('book is product', function() {
        assert.equal('a', book.title);
        assert.equal(32, book.price);
        assert(book.save());
    });

    it('book is product', function() {
        product.save = function(){
            return false;
        };
        assert(book.save());
        assert(!product.save());
    });
});

function include() {
    var arg, prop, o = {};
    for (arg = 0; arg < arguments.length; arg += 1) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                o[prop] = arguments[arg][prop];
            }
        }
    }
    return o;
}

var material = {
    setOrigin: function(country) {
        this.origin = country;
        return true;
    }
};
describe('prototype inherit', function() {
    it('book is material and product', function() {
        var book = include(product, material);
        assert(book.save);
        assert(book.setOrigin('abc'));
    });
});

