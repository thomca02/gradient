var css = document.querySelector("h3"); //tags h3 in doc
var color1 = document.querySelector(".color1"); //tags color1
var color2 = document.querySelector(".color2"); //tags color2
var body = document.getElementById("gradient"); //tags the body
var randomColor = document.querySelector("button"); //tags the button
var color = ""; //color picker
setGradient(); //set the gradient

//below allows you to chose two colors for a gradient background
function setGradient() {
	body.style.background =
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "background : linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

//below adds a random button generator to select a gradient
function randomGradient() {
	var hexVars = "0123456789ABCDEF";
	color = "#";
	for (var i = 0; i < 6; i++) {
		color += hexVars[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}

//below is for when the button is clicked, random colors will be displayed
randomColor.addEventListener("click", function() {
	//first random color
	randomGradient();
	console.log(color);
	color1.value = color;
	//second random color
	randomGradient();
	color2.value = color;
	//set gradient
	setGradient();
});


//below displays the two colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
