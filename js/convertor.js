var makeFahrenheit = function(celsius) {
	if (isNaN(celsius)) {
		document.getElementById("celMessages").innerHTML = "<p id='errorMessage'>Sorry, please enter a valid number.</p>";		
	} else {
		var fahrenheit = ((celsius * 9)/5) + 32;
		document.getElementById("celMessages").innerHTML = "<p id='result'>" + fahrenheit + " degrees fahrenheit</p>";
	}
};

var makeCelsius = function(fahrenheit) {
	if (isNaN(fahrenheit)) {
		document.getElementById("farMessages").innerHTML = "<p id='errorMessage'>Sorry, please enter a valid number.</p>";
	} else {
		var celsius = ((fahrenheit - 32)*5) / 9;
		document.getElementById("farMessages").innerHTML = "<p id='result'>" + celsius + " degrees celsius</p>";
	}
};