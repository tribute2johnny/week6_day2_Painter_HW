const assert = require('assert')
const Decorator = require('../decorator.js')

describe('Decorator', function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator()
    })

    it('check decorator starts with an empty paint can', function(){
        assert.strictEqual(decorator.paintStock.length, 0)
    })

    it('check can add paint to stock', function(){
        decorator.addToStock(1)
        const actual = decorator.getPaintStock();
        assert.strictEqual(actual, 1)
    })

    it('check can calculate total litres', function(){
        decorator.getPaintStock(3)
        const actual = decorator.calculateTotal();
        assert.strictEqual(actual, 15)
    })
})