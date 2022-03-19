const cb = require('./codeBreaker'); 

test('full match all digits', () => {
    const result = cb.match('1234'); //Act
    expect(result).toBe('XXXX'); //Assert
});

test('none in position', () => {
    const result = cb.match('9578'); 
    expect(result).toBe(''); 
});
