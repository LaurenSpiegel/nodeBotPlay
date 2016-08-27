var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!
  var servo = new five.Servo({
    pin: 9,
    range: [0, 180]
  });
  var sensor = new five.Sensor("A5");


  sensor.on("change", function() {
    // Scale the sensor's data from 0-1023 to 0-10
    console.log("potentiometer value: ", sensor.scaleTo(0, 179));
    servo.to(sensor.scaleTo(0, 179));
  });

})
