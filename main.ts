function szöbeg_kiírása_2 (szöveg: string, meddig: number, szünet: number) {
    for (let index = 0; index <= szöveg.length; index++) {
        basic.showString(szöveg.substr(index, 1))
        basic.pause(meddig)
        basic.clearScreen()
        basic.pause(szünet)
    }
}
input.onButtonPressed(Button.A, function () {
    szöbeg_kiírása_2("Hello!", 500, 200)
})
basic.forever(function () {
	
})
