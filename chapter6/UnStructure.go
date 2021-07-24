package main

import "fmt"

func main() {
	i := 0

label:
	i++
	fmt.Println("Loop ")
	if i < 5 {
		goto label
	}
	goto another
	fmt.Println("That will never be print")
another:
	fmt.Println("End of program")
}
