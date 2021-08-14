package main

import "fmt"

func hello() (int, int) {
	return 10, 20
}
func fileRead() (int, error) {
	return 10, fmt.Errorf("Error")
}
func main() {
	var a int
	var b int
	a, b = hello()
	fmt.Println("A ", a, " b ", b)

	c, err := fileRead()
	if err != nil {
		fmt.Print("Have error ", c)
	}
}
