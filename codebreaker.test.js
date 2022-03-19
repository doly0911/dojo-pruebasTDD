const cb = require('./codeBreaker'); 

test('full match all digits', () => {
    const result = cb.match('1234'); //Act
    expect(result).toBe('XXXX'); //Assert
});
