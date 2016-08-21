package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

var pairs = []byte{
	'a', 'e',
	'e', 'a',
	'b', 'q',
	'q', 'b',
	'd', 'p',
	'p', 'd',
	'e', 'a',
	'a', 'e',
	'f', 'f',
	'm', 'w',
	'w', 'm',
	'n', 'u',
	'u', 'n',
	's', 's',
	'x', 'x',
	'z', 'z'}

func ambigram(s1 string, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}
	for i := 0; i < len(s1); i++ {
		c1 := s1[i]
		c2 := s2[len(s1)-i-1]
		found := false
		for j := 0; j < len(pairs); j += 2 {
			if (c1 == pairs[j+0] && c2 == pairs[j+1]) ||
				(c1 == pairs[j+1] && c2 == pairs[j+0]) {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println("loading")
	buf, _ := ioutil.ReadFile("100kwords.txt")
	dat := string(buf)
	bigWordList := strings.Split(dat, "\n")

	for i := 0; i < len(bigWordList); i++ {
		var w1 = bigWordList[i]
		for j := i + 1; j < len(bigWordList); j++ {
			var w2 = bigWordList[j]
			if ambigram(w1, w2) {
				fmt.Println(w1, w2)
			}
		}
	}
}
