function CodeBreaker(secretDigit){
    this.secretDigit = secretDigit + "";
}

const codeBreaker = new CodeBreaker(1234);
var digitExist = '';

function match(digits){

    if(codeBreaker.secretDigit.includes(digits)) {
        return 'XXXX';
    } 
     else {
        for(var i = 0; i < 4; i++){   
            var digit= digits.charAt(i);  //separa cada digito ingresado por usuario         
            for (var j=0; j<4; j++){                
                var secretNum = codeBreaker.secretDigit.charAt(j);   //separa cada digito del numero a adivinar

                if((digit==secretNum) && (i==j)) {
                    digitExist += 'X';
                }   
                j=4;
            }           
        }         
        if (digitExist=='') {
            return '';
        } else return digitExist;
       
    }
    
}

module.exports.match = match;