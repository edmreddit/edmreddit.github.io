flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            var flair_class = '';
            for (var i = 0; i < data.length; i++) {
                flair_class += 'flair-' + data[i] + ' ';
            }
            
            flair_class = flair_class.slice(0, -1);
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                artist_id: data[2],
                orig_id: orig_id,
                artist_name: flair.names[key],
                flair_class: flair_class,
            }
        }
    }
};

flair.names = {

"3LAU":  "3LAU"
"aboveandbeyond": "Above & Beyond"
"adventureclub": "Adventure Club"
"adventureclub2": "Adventure Club 2"
"aerochord": "Aero Chord"
"afrojack": "Afrojack"
"alanwalker": "Alan Walker"
"alesso": "Alesso"
"alsionwonderland": Alison Wonderland"
"alyandfila": "Aly & Fila"
"aphextwin": "Aphex Twin"
"arminvanbuuren": "Armin van Buuren"
"arminvanbuuren2": "Armin van Buuren 2"
"arty": "Arty"
"autograf": "Autograf"
"avicii": "Avicii"
"avicii2": "Avicii"
"axwellandingrosso": "Axwell & Ingrosso"
"axwellandingross2": "Axwell & Ingrosso 2"

};