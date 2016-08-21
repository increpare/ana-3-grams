function sort(s){
	return s.split('').sort().join("")
}

console.log("loading pronunciations")
var fs = require("fs")
rawString = fs.readFileSync("pronunciations.txt", "utf8")
var pronunciations = JSON.parse(rawString)

var backwardsDict = {}

console.log("building reverse dict")

var desiredLength=6;

for (var word in pronunciations){
	var pronunciation = pronunciations[word].slice()

	pronunciation.sort()

	var pstring = pronunciation.join()
	if (pstring in backwardsDict){
		backwardsDict[pstring].push(word)
	} else {
		backwardsDict[pstring]=[word]	
	}
}

console.log("anagrams:")

for (var pronunciation in backwardsDict){
	var words = backwardsDict[pronunciation]
	if (words.length>1){
		var proset = [words[0]]
		for (var i=1;i<words.length;i++){
			var found=false;
			for (var j=0;j<proset.length;j++){
				if (pronunciations[words[i]].join()===pronunciations[proset[j]].join() ){
					found=true;
					break;
				}
			}
			//if (found===false)
			{
				proset.push(words[i])
			}
		}
		if (proset.length>1){
			console.log(proset.join(", "))
		}	
	}
}



