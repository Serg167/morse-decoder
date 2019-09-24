const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var i = 0;
    var result ='';
    var tmp =''; //word
    var j; // counter(10 bits)
    while (i < expr.length) {
        tmp = '';
        j = 0;
        while (j < 5) {
            if (expr[i] == '*') {
                i += 10;
                result += ' ';
                break;
            } else if (expr[i] + expr[i + 1] == "10") {
                tmp += '.';
            } else if (expr[i] + expr[i + 1] == "11") {
                tmp += '-';
            }
            i += 2;
            j++;
        }
        for (var key in MORSE_TABLE) {
            if (key == tmp) {
                result += MORSE_TABLE[key];
            }
        }
    }
    return result;
}

module.exports = {
    decode
}