input.onButtonPressed(Button.A, function () {
    lcdDisplay.lcdClearAll()
})
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
lcdDisplay.lcdSetBgcolor(0xffffff)
lcdDisplay.lcdDisplayText("Guess The number 1-9", 1, 20, 10, lcdDisplay.FontSize.Large, 0xFF0000)
basic.pause(100)
lcdDisplay.lcdDisplayText("Press A to begin", 2, 60, 60, lcdDisplay.FontSize.Large, 0xFF0000)
basic.forever(function () {
	
})
