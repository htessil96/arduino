var serial;
var portName = "COM3";
var sensorValue;

function setup() {
	createCanvas(900, 1800);
    
    serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function draw() {
	background("lightblue");
    
    var c = map(sensorValue, 0, 1023, 105, 1);
    
    //hair
    fill(c + 42, c + 5, c  );
  ellipse(300,300,350,550);
    //head
    fill('#F7CD91');
     ellipse(300,280,300,350);
    //eyes
    fill('#FFFFFF')
    ellipse(250,250,70,40);
    ellipse(350,250,70,40);
    fill('#9B7C5B')
    ellipse(250,250,30,30);
    ellipse(350,250,30,30);
    //lips
    fill('#ECB3C5')
    arc(330,350,50,20,PI,0);
    arc(280,350,50,20,PI,0);
    arc(305,350,100,40,0,PI);
    //eyebrows
    fill('#505A5B')
  stroke(0);
  strokeWeight (5);
  
    
}
function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}
    
function serialError() {
    console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}