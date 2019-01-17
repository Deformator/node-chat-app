const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string-values', () => {
        var invalidString = 355;
        expect(isRealString(invalidString)).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var emptyString = '     ';
        expect(isRealString(emptyString)).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        var validString = 'Andrii';
        expect(isRealString(validString)).toBe(true);

    });
});