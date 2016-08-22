function sort(s){
	return s.split('').sort().join("")
}

var fs = require("fs")
rawString = fs.readFileSync("pronunciations.txt", "utf8")
var pronunciations = JSON.parse(rawString)

rawString2 = fs.readFileSync("pronunciations_noaccen.txt", "utf8")
var pronunciations_noaccent = JSON.parse(rawString2)

console.log("starting");
for (var w1 in pronunciations_noaccent){
	for (var w2 in pronunciations_noaccent){
		if (w1>=w2){
			continue;
		}		
		if (pronunciations[w1].join()!==pronunciations[w2].join() && 
			pronunciations_noaccent[w1].join()===pronunciations_noaccent[w2].join()){
			console.log(w1,w2);			
		}
	}
}