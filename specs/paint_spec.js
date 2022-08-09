const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){
    let paint;

    beforeEach( function(){
        paint = new Paint(5, true)
    })

    it('paint can should have a number of litres', function(){
        const actual = paint.volume
        assert.strictEqual(actual, 5)
    })

    it('paint can check if it is empty', function(){
        const actual = paint.isEmpty
        assert.strictEqual(actual, true)
    })

    it('paint can empty itself of paint', function(){
        paint.empty()
        const actual = paint.isEmpty
        assert.strictEqual(actual, false)
    })
})