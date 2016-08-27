var five = require('johnny-five')
var board = new five.Board()

var reset = function(servo){
  servo.stop();
  servo.center();
}
board.on('ready', function () {

  // Your solution here!
  var servo = new five.Servo({
    pin: 9,
    range: [0, 180]
  });
  servo.sweep();
  this.wait(3000, function() {
    reset(servo);
  });

})
