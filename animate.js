var c = document.getElementById("svg");


var dot = document.getElementById("dot");
var screensaver = document.getElementById("screensaver");
var stop_ = document.getElementById("stop");


var id;
var width = 500;
var height = 500;

var clear = function(e){
    c.innerHTML = "";
    clearInterval(id); 
}


var circle = function(e){ //changes size of circle
    var radius = 0;
    var growing = true;

    var animateCircle = function(e){
	clear();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", width/2); // centers circle
	c1.setAttribute("cy", height/2);
	c1.setAttribute("r", radius); 
	c1.setAttribute("fill", "black"); 
	c.append(c1); //creates circle

	if (growing){ //grow
	    radius+=1;
	    if (radius >= width/2){ //forces circle to stop growing
		growing = false;
	    }
	}
	else if (!growing){  //stop grow
	    radius-=1;
	    if (radius <= 0){ //forces circle to grow
		growing = true
	    }
	} 
    }
    setInterval(animateCircle, 10);
}
dot.addEventListener("click", circle); 

  
var screensave = function(e){ //bouncing screensave image
    var radius = 20;
    var x = Math.random()*width; //random path
    var y = Math.random()*height;
    var xpath = 1;
    var ypath = 1;
    
    var animate = function(e){
	clear();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", radius);
	c1.setAttribute("fill", "black"); 
	c.append(c1);

	if (x <= 0){ //goes right
	    xpath = 1;
	}
	else if (x >= width){ //goes left
	    xpath = -1;
	}
	if (y <= 0){ //goes up
	    ypath = 1;
	}
	else if (y >= height){ //goes down
	    ypath = -1;
	}
	x += xpath;
	y += ypath;
    }
    setInterval(animate, 10); 
}
screensaver.addEventListener("click", screensave);



var stop = function(e){
    clearInterval(id);
}
stop_.addEventListener("click", clear); 
