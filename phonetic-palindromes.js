function sort(s){
	return s.split('').sort().join("")
}

var fs = require("fs")
rawString = fs.readFileSync("pronunciations_noaccen.txt", "utf8")
var pronunciations = JSON.parse(rawString)

commonWords_raw = fs.readFileSync("100kwords.txt", "utf8")
var commonWords = commonWords_raw.split("\n");

for (var w1 in pronunciations){
	for (var w2 in pronunciations){
		if (w1>=w2) {
			continue;
		}

		var p1 = pronunciations[w1];

		var p2 = pronunciations[w2].slice();
		p2.reverse()

		if (p1.join()==p2.join()){
			console.log(w1,w2);
		}

	}
}