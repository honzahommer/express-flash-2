var assert = require('chai').assert;
var flash = require('../lib/index');

describe('exress-flash-2', function(){
  describe('module', function(){
    it('should export middleware', function(){
      assert.isFunction(flash);
    });
  });
});