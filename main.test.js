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
        expect(greet(['Jose','Pep'])).toEqual("Hello, Jose,Pep");
     });
     it('4x names should be working',()=>{
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toEqual("Hello, Alex,Arsene,Jose,Zidane");
     })
})