var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!

  var led = new five.Led(9);

  var light = new five.Light("A0");

  light.on("change", function() {
    console.log(this.level);
    if(this.level > 0.600){
      led.on();
    }
    if(this.level <= 0.600){
      led.off();
    }
  })

})
