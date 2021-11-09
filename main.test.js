const { it } = require('@jest/globals');
var utils  = require('course-utilities');
var greet = utils.load('./main.js', 'Greet');
describe('test greet()',()=>{
    it('normal name should be working',()=>{
       expect(greet('Elizabeth')).toEqual("Hello, Elizabeth");
    });
    it('uppercase name should be working',()=>{
        expect(greet('ELIZABETH')).toEqual("HELLO ELIZABETH");
     });
     it('2x names are working',()=>{
        expect(greet(['Eliza','Beth'])).toEqual("Hello, Eliza,Beth");
     });
     it('4x names should be working',()=>{
        expect(greet(['Eliza','Beth','George','David'])).toEqual("Hello, Eliza,Beth,George,David");
     })
});
 