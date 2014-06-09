var makeFahrenheit = function(celcius) {
	if (isNaN(celcius)) {
		document.getElementById("messages").innerHTML = "<p id='errorMessage'>Sorry, please enter a valid number.</p>";		
	} else {
		var fahrenheit = ((celcius * 9)/5) + 32;
		document.getElementById("messages").innerHTML = "<p id='result'>" + fahrenheit + " degrees fahrenheit";
	}
};