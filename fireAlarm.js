var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!

  var button = new five.Button({pin: 5});
  var led = new five.Led(13);
  var temperature = new five.Thermometer({pin: "A0"});
  var piezo = new five.Piezo(9);
  var stayOff = false;

  temperature.on("change", () => {
    console.log("temp in celcius: ", temperature.C);
    if(temperature.C > 100){
      if(!stayOff){
        piezo.frequency(587, 1000);
        led.toggle();
      }
    }
    if(temperature.celcius <= 100){
      piezo.off();
      led.off();
    }
  });

  button.on("press", function() {
    led.off();
    piezo.off();
    stayOff = !stayOff;
  });

})
