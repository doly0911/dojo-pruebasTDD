const cb = require('./codeBreaker'); 

test('full match all digits', () => {
    const result = cb.match('1234'); //Act
    expect(result).toBe('XXXX'); //Assert
});

test('digits not exist', () => {
    const result = cb.match('9578'); 
    expect(result).toBe(''); 
});

test('only 1 digit', () => {
    const result = cb.match('1765'); 
    expect(result).toBe('X'); 
});