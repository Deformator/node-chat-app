var expect = require('expect');

var { generateMessage , generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate a correct message object', () => {
        // store res in variable

        var from = 'andrii@gmail.com'
        var text = 'Hello tests'


        var message = generateMessage(from, text);
        expect(message).toMatchObject({
            from,
            text
        })

        expect(typeof message.createdAt).toBe('number')


    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', () => {
        var from ='andrii@gmail.com';
        var url = 'https://www.google.com/maps?q=1,1';

        var message = generateLocationMessage(from, 1,1);
        expect(message).toMatchObject({
            from, url
        })
        expect(typeof message.createdAt).toBe('number');
    });
});