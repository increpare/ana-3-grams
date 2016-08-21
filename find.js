

function lookForWords(){
	//looking for 3 words
	//two degrees of freedom in lengths
	var a = 3;
	var b = 3;
	var c = 3;
	var wl = wordLists[2*a];
	var found = [];
	for (var i=0;i<wl.length;i++){
		var wi = wl[i];
		var aprefix = wi.substring(0,a);
		var asuffix = wi.substring(a);
		for (var j=i+1;j<wl.length;j++){

			var wj = wl[j];
			var bprefix = wj.substring(0,b);
			var bsuffix = wj.substring(b);
			
			if (asuffix!==bprefix){
				continue;
			}

			for (var k=j+1;k<wl.length;k++){
				var wk = wl[k];
				var cprefix = wk.substring(0,c);
				var csuffix = wk.substring(c);

				if (bsuffix!==cprefix || 
					csuffix!==aprefix){
					continue;
				}

				console.log([wi,wj,wk]);
			}
		}
	}
}

var rawString;
var wordList = [];
var wordLists = {};

function doStart(){
	wordList = rawString.split("\n");

	for (var i=0;i<wordList.length;i++){
		var w = wordList[i];
		var l = w.length;
		if (! (l in wordLists)){
			wordLists[l]=[w];
		} else {
			wordLists[l].push(w);
		}
	}
	lookForWords();
}
console.log("hello world");
var fs = require("fs");
rawString = fs.readFileSync("words.txt", "utf8");
doStart();