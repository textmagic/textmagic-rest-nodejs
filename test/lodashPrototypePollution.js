var assert = require("assert");
var _= require('lodash');

describe('Lodash prototype pollution check', function(){
    describe('... ', function(){
        it('_.merge({}, {"__proto__":{"oops":"It works !"}})', function(done){
            var malicious_payload = '{"__proto__":{"oops":"It works !"}}';
            var a = {};
            _.merge({}, JSON.parse(malicious_payload));
            assert.notEqual(a.oops, "It works !");
            done();
        });
    })
});




