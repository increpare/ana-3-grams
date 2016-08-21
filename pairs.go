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
	buf, _ := ioutil.ReadFile("100kwords.txt")
	dat := string(buf)
	bigWordList := strings.Split(dat, "\n")

	for a := 2; a < 6; a++ {
		for b := a; b < 6; b++ {

			wordList := filterLen(bigWordList, a+b)

			for i := 0; i < len(wordList); i++ {
				var wi = wordList[i]
				var aprefix = wi[:a]
				var asuffix = wi[a:]

				for j := i + 1; j < len(wordList); j++ {
					var wj = wordList[j]
					var bprefix = wj[:b]
					var bsuffix = wj[b:]

					if asuffix == bprefix && aprefix == bsuffix {
						fmt.Println(wi, wj)
					}

				}
			}
		}
	}
}
