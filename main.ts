//% color=#cc00ff icon="\u2590" block="Line Tracking Sensor"
//% category="Line Tracking Sensor"
namespace line_tracking_sensor {
    /**
     * Returns the reflection, in [0, 100] where darker color is closer to 0
     * and brighter is closer to 100.
     */
    //% blockId="reflection"
    //% block="reflection at %pin"
    //% weight=65
    export function reflection(pin: AnalogPin) {
        return Math.round(pins.map(
            // The sensor never goes below 30 for white. It yields a value
            // aorund 80 for pretty good black, and can go up to 400 or so
            // for slightly darker black. A value above 100 is thus as good
            // as 100. Hence we clip the possible value range to [30, 100].
            // To follow the convention with Lego where the reflection value
            // for white is closer to 100 and the value for black is closer
            // 0, we change the sensor reading to (100 - reading), and scale
            // the value to [0, 100]
            100 - Math.max(Math.min(pins.analogReadPin(pin), 100), 30),
            0,
            70,
            0,
            100
        ))
    }
}
