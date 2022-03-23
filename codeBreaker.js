function CodeBreaker(secretDigit) {
  this.secretDigit = secretDigit + "";
}

const codeBreaker = new CodeBreaker(1234);
var digitExist = "";

function match(digits) {
  if (codeBreaker.secretDigit.includes(digits)) {
    return "XXXX";
  } else {
    for (var i = 0; i < 4; i++) {
      var digit = digits.charAt(i); //Split each entry by digits.
      for (var j = 0; j < 4; j++) {
        var secretNum = codeBreaker.secretDigit.charAt(j); //Split each digit of the number to guess.

        if (digit == secretNum && i == j) {          
          digitExist += "X";
          j = 4;
        } else if (digit == secretNum) {          
          digitExist += "-";
          j = 4;
        } else {
          digitExist += "";
        }
      }
    }
  }
  rta = digitExist;
  digitExist = "";
  return rta;
}

module.exports.match = match;
