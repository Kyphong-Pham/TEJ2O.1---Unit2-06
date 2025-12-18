/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyphong Pham
 * Created on: Sep 2025
 * This program turns on and off an LED on a microbit.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // turns on when pressing A
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    // turn off when pressing B
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
