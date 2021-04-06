radio.onReceivedNumberDeprecated(function (radio2) {
    if (radio2 == 1) {
        RingbitCar.forward()
    } else if (radio2 == 3) {
        RingbitCar.turnleft()
    } else if (radio2 == 4) {
        RingbitCar.turnright()
    } else if (radio2 == 2) {
        RingbitCar.back()
    } else {
        radio2 = 0
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
let receivedNumber = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(7)
let radio2 = receivedNumber
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
