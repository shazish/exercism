module.exports =  {
	encode: function(phrase) {
		codedphrase = "";
		for (i = 0; i < phrase.length; i++) {
			ch = phrase.charCodeAt(i);
			if ( ch > 96 && ch < 123 )
				ch += ( ( 110 - ch ) * 2 ) - 1;
			else if ( ch > 64 && ch < 91 )
				ch += ( ( 78 - ch ) * 2 ) - 1 + 32;
			else if ( !( ch > 47 && ch < 58 ) ) // leaves ch untouched if it's a number
				ch = "";
				
			if (ch != "") {
				if ( codedphrase.length % 6 == 5 ) 
						codedphrase += " ";
				codedphrase += String.fromCharCode(ch);
			}
				
		};
		return codedphrase;
	},
	
};