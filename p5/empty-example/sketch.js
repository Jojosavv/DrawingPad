
var h = 50;
var w =50;
var xAxis =1000;
var yAxis =10;

var size =0;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background('#000000');

   while (size<windowWidth){
  		xAxis=random(windowWidth);
  		yAxis=random(windowHeight);
  		rect(xAxis,yAxis,w,h);
  		fill('#1E17FA');
  		stroke('#FF57FF');
		size= size + 1;
	} 		
}


function draw() {
  // put drawing code here
  if(mouseIsPressed) {
  	stroke('#000000');
  	strokeWeight(5);
  	fill("#000000");
  	ellipse(mouseX,mouseY,50,50);
  }
  
  





  


  
 

}