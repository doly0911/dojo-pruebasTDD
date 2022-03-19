function CodeBreaker(secretDigit){
    this.secretDigit = secretDigit + "";
}

const codeBreaker = new CodeBreaker(1234);

function match(digits){
    return codeBreaker.secretDigit.includes(digits)?'XXXX':'';
}

module.exports.match = match;