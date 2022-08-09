const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(5, false);
    })

    it('room should have area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 5);
    })

    it('room should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })

    it('room should be able to be painted', function(){
        room.paint()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})