var lib = require('../index.js');
var assert = require('assert');

describe('test/test.js', function() {
  describe('Get well-know token info', function() {
    it('Should be return an Facebook app token info', (done) => {
      lib.wellKnowInfo('930942348057915|zSUJsN4w3tCUo57m7GZWjlBl8fq')
        .then(wellKnowInfo => {
          assert.equal('facebook', wellKnowInfo['issuer'])
          assert.equal('app', wellKnowInfo['type'])
          done()
        })
        .catch((err) => {
          done(new Error(err));
        })
      });
    it('Should be return an Facebook user token info', (done) => {
      lib.wellKnowInfo('EAAGBVsxNIksBAJXt5DiFcmOpFRnOKOqqcAwKH51zXan7vZAkPPeOHC8zq3IKOeszCppQSpzdBJ2L0ju5gJ8Goe8PQBpIsOwTY3JxU6Zi9Jji6h5lK2PWa2gsnDzOg1RNxCzMeYbDON3RU5G9AEubOA8cUCVRDyVyVTB8LVM0OPwIS3FLbKnOQtx55fRmiC5l4AyXakAQkMXkLOVLAgHW0kVJ')
        .then(wellKnowInfo => {
          assert.equal('facebook', wellKnowInfo['issuer'])
          assert.equal('user', wellKnowInfo['type'])
          done()
        })
        .catch((err) => {
          done(new Error(err));
        })
    });
    it('Should be return an Google token info', (done) => {
      lib.wellKnowInfo('ya29.GlsvIcGFpX96cGLbCxzV7XXoIgJ5oVzH-RpQNe54OANkMAcM8FiWB9wc-hp063kw5imvFhrqR7zMcwo_ZzQWgzzIQ2wPl1sE2rttFc86dyyDo6002GXXvwCidVqj')
        .then(wellKnowInfo => {
          assert.equal('google', wellKnowInfo['issuer'])
          assert.equal(undefined, wellKnowInfo['type'])
          done()
        })
        .catch((err) => {
          done(new Error(err));
        })
    });
  });

});

