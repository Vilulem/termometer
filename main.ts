let Temperatur = 0
input.onGesture(Gesture.Shake, function () {
    Temperatur = input.temperature()
    basic.showNumber(Temperatur)
    if (Temperatur > 20) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
