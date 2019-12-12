/*
    final project presentation
    12.05.2019
    
    photocell-arduino
*/

var serial;
var portName = "COM3";
var sensorValue;

var diaml=0;
var c=0;

function setup() {
    createCanvas(1260, 600);

	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function draw() {
      
  
        background("#72B5E8");
        textFont("New times roman");
        fill(255);
        textSize(50);
        text("Hover over the Photocell",20,300);
        textSize(15);
        text("or click the mouse", 20,330);
  //christmas tree 
        
        //truck tree	
        fill("#7c501a"); 
        strokeWeight(1);
        noStroke();
	    rect(630, 390, 100, 180);	
       
         //TREE
        fill("#034B1A");
        noStroke();  
	    triangle(680, 250, 450, 450, 900, 450); //third - top, left,right
  	    triangle(680, 150, 480, 350, 860, 350); //second
  	    triangle(680, 100, 530, 250, 820, 250); //first 
     
 diaml = map(sensorValue, 0, 1023, 45, 1);

    //lights
        strokeWeight(1);
        noStroke(); 	
        fill ("#43FCFA") //blue
        ellipse(650, 320, diaml,diaml);
        fill("#FF0000") //red
        ellipse(575, 400, diaml,diaml);	
        fill("#FF6F00") // orange
        ellipse(625, 220, diaml,diaml);
        fill("#00FF00") //green
        ellipse(700, 175, diaml,diaml);
        fill("#FC43BE") //pink
        ellipse(735, 400, diaml,diaml);
        fill("#F1C40F")//mustard
        ellipse(735, 260, diaml,diaml);
        fill("#FFFF00") //yellow
        noStroke();
   
    
        push();
        translate (width * 0.8, height * 0.5); 
        star(-327, -210, 20, 40, 5);
        pop();
               
}

   /* star */
    

function star(x, y, radius1, radius2, npoints) {
        
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0; 
        beginShape();
            
    for (var a = 1; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a+halfAngle) * radius1;
        sy = y + sin(a+halfAngle) * radius1;
        vertex(sx, sy);
    }

  endShape(CLOSE);

}

function mousePressed() {
    
 
    // lights
     if(diaml>25){
                diaml=0;
            }else{
                diaml=diaml+5;
            }
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