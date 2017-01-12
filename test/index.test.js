var assert = require('chai').assert;
var flash = require('../lib/index');

describe('connect-flash', function(){
  describe('module', function(){
    it('should export middleware', function(){
      assert.isFunction(flash);
    });
  });
});