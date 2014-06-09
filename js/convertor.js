var makeFahrenheit = function(celcius) {
	if (isNaN(celcius)) {
		document.getElementById("error").innerHTML = "<p id='error'>Sorry, please enter a number.</p>";		
	} else {
		console.log("We're good to go");
	}
};