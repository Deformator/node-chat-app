var expect = require('expect');

var { generateMessage } = require('./message');

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