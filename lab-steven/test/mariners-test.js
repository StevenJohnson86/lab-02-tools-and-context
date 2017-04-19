'use strict';

const assert = require('assert');
const mariners = require('../lib/mariners.js');

let haniger = new mariners.Batter('Mitch Haniger', 1, 17, true);
let paxton = new mariners.Pitcher('James Paxton', 4, 65, false);
let valencia = new mariners.Mariner('Danny Valencia', 7, 26);

describe('mariners.js', function(){

  describe('#Mariner', function(){
    it('changes experience number input to string', function(){
      assert.strictEqual(typeof haniger.experience, 'string');
      assert.strictEqual(typeof paxton.experience, 'string');
      assert.strictEqual(typeof valencia.experience, 'string');
    });
    it('name property not null or undefined', function(){
      assert.notEqual(haniger.name, null);
      assert.notEqual(haniger.name, undefined);
      assert.notEqual(paxton.name, null);
      assert.notEqual(paxton.name, undefined);
      assert.notEqual(valencia.name, null);
      assert.notEqual(valencia.name, undefined);
    });
  });

  describe('#Batter', function(){
    it('has proper batsWell type', function(){
      assert.strictEqual(typeof haniger.batsWell, 'boolean');
    });
    it('inherits property disappointment from Mariner constructor', function(){
      assert.equal(haniger.disappointment, 'eventually');
    });
  });

  describe('#Pitcher', function(){
    it('has proper isTerrible type', function(){
      assert.strictEqual(typeof paxton.isTerrible, 'boolean');
    });
    it('inherits property disappointment from Mariner constructor', function(){
      assert.equal(paxton.disappointment, 'eventually');
    });
  });
});
