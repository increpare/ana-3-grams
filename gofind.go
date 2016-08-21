package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func filterLen(s []string, l int) []string {
	var p []string // == nil
	for _, w := range s {
		if len(w) == l {
			p = append(p, w)
		}
	}
	return p
}

func main() {
	fmt.Println("loading")
	buf, _ := ioutil.ReadFile("words.txt")
	dat := string(buf)
	wordList := strings.Split(dat, "\n")

	var a = 4
	var b = 4
	var c = 4

	fmt.Println("processing")

	wordList = filterLen(wordList, 2*a)

	fmt.Println("finding")

	for i := 0; i < len(wordList); i++ {
		var wi = wordList[i]
		var aprefix = wi[:a]
		var asuffix = wi[a:]

		for j := i + 1; j < len(wordList); j++ {
			var wj = wordList[j]
			var bprefix = wj[:b]
			var bsuffix = wj[b:]

			if asuffix != bprefix {
				continue
			}

			for k := j + 1; k < len(wordList); k++ {
				var wk = wordList[k]
				var cprefix = wk[:c]
				var csuffix = wk[c:]

				if bsuffix != cprefix ||
					csuffix != aprefix {
					continue
				}
				fmt.Println(wi, wj, wk)
			}
		}
	}
}
