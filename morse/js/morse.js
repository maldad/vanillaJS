var Morse = (function () {

    var abc = {
        a: '._', b: '_...', c: '_._.', d: '_..', e: '.', f: '.._.', g: '__.',
        h: '....', i: '..', j: '.___', k: '_._', l: '._..', m: '__', n: '_.',
        o: '___', p: '.__.', q: '__._', r: '._.', s: '...', t: '_', u: '.._',
        v: '..._', w: '.__', x: '_.._', y: '_.__', z: '__..',
        1: '.____', 2: '..___', 3: '...__', 4: '...._', 5: '.....',
        6: '_....', 7: '__...', 8: '___..', 9: '____.', 0:'_____',
        ' ': '|'
    };

    var change = function(character) {
        return abc[character];
    };

    var encrypt = function(string) {
        var output = "";
        for(var i = 0; i < string.length; i++)
            output = output + change(string[i]) + " ";
        return output;
    }

    return {
        encrypt: encrypt
    }
    
})();
