function alphabetPosition(text) {
    var alphabet = ['', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 't', "u", "v", "w", "x", "y", "z"];
    var numberLetter = '';
    var letter;

    for (var i = 0; i <= text.length; i++) {
        if (text[i] != undefined) {
            letter = text[i].toLowerCase();
        }
        if (letter != ' ') {
            for (var t = 0; t <= alphabet.length; t++) {
                if (letter == alphabet[t]) {
                    numberLetter = String(numberLetter + ' ' + t)
                } else if (t > alphabet.length) {
                    continue;
                }
            }
        } else {
            continue;
        }
    }

    return numberLetter;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))