// via: https://github.com/viperML/viperML.github.io/blob/master/search.js

String.prototype.replaceChars = function(character, replacement){
	var str = this;
	var a;
	var b;
	for(var i=0; i < str.length; i++){
		if(str.charAt(i) == character){
			a = str.substr(0, i) + replacement;
			b = str.substr(i + 1);
			str = a + b;
		}
	}
	return str;
}

function search(query){
	switch(query.substr(0, 2)){
		case "!s":
			query = query.substr(3);
			window.location = "https://new.startpage.com/do/search?query=" + query.replaceChars(" ", "+");
			break;

		case "!x":
			query = query.substr(3);
			window.location = "https://searx.me/?q=" + query.replaceChars(" ", "+");
			break;

		case "!g":
			query = query.substr(3);
			window.location = "https://www.google.com/search?q=" + query.replaceChars(" ", "+");
			break;

		case "!w":
			query = query.substr(3);
			window.location = "https://wikipedia.org/wiki/Special:Search/" + query.replaceChars(" ", "+");
			break;

		case "":
			break;

		default:
			window.location = "https://duckduckgo.com/?q=" + query.replaceChars(" ", "+");
	}
}

window.onload = function(){
    
	searchinput = document.getElementById("searchBox");
	if(!!searchinput){
		searchinput.addEventListener("keypress", function(a){
			var key = a.keyCode;
			if(key == 13){
				var query = this.value;
				search(query);
			}
		});
	}

	var search_sqr = document.getElementById("search_sqr");
}

/*! Terminal Text Effect
 * https://codepen.io/anon/pen/QZzNve
 */

searchText(
	['DuckDuckGo', '!s Start Page', '!x searX.me', '!g Google', '!w Wikipedia'],
	'text',
	['crimson', 'dodgerblue', 'green', 'gold', 'silver']
);

function searchText(words, id, colors) {
	if (colors === undefined) colors = ['#fff'];
	var visible = true;
	var con = document.getElementById('help');
	var letterCount = 1;
	var x = 1;
	var waiting = false;
	var target = document.getElementById(id)
	target.setAttribute('style', 'color:' + colors[0])
	window.setInterval(function() {
		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount)
			window.setTimeout(function() {
				var usedColor = colors.shift();
				colors.push(usedColor);
				var usedWord = words.shift();
				words.push(usedWord);
				x = 1;
				target.setAttribute('style', 'color:' + colors[0])
				letterCount += x;
				waiting = false;
			}, 1000)

		} else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(function() {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 1000)
		} else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount)
			letterCount += x;
		}
	}, 120)

	window.setInterval(function() {
		if (visible === true) {
			con.className = 'caret hidden'
			visible = false;
		} else {
			con.className = 'caret'
			visible = true;
		}
	}, 400)
}
