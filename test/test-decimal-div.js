var assert = require('assert');
var nx = require('next-js-core2');
var Decimal=require('../src/next-decimal');
describe('Decimal', function () {

  describe('#mul', function () {
    it('0.3/0.1=3', function () {
      var mulResult = Decimal.div(0.3, 0.1);
      assert.equal(3, mulResult);
    });
  });

});
