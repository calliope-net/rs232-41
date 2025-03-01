input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    rs232.sendeText("rs232-41")
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString(text)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    basic.clearScreen()
    text = rs232.empfangeText()
    basic.showString(text)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    basic.showNumber(rs232.getVariable(rs232.eVariablen.takt_ms))
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    rs232.empfangAbbrechen()
    basic.setLedColor(0xffff00)
})
function Konfiguration () {
    rs232.comment("rs232-41 asynchrone serielle Datenübertragung mit Licht")
    rs232.comment("Erweiterung: calliope-net/rs232")
}
let text = ""
rs232.setPins(DigitalPin.P1, AnalogPin.P2, 150)
rs232.setTakt(50)
basic.showString("^")
