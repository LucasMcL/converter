//////////////////////////////////////////////////////////////////////////////

//Overall structure:
  //Get elements needed
    //Text from input field
    //Radio button value
    //Convert button
    //Clear button
    //Enter button pressed in input field?
  //Define functions
    //To Fahrenheit
    //To Celcius
    //Which radio button function
      //This can't be an "on click" in case they go with the default option and don't click
  //Add event listeners
    //Figure this out later...

  //How to do colors?


//////////////////////////////////////////////////////////////////////////////


///////////////////////
//Get Elements Needed//
///////////////////////
var tempEl = document.getElementById('temp_input');
var radioEl_F = document.getElementById('radio_f');
var radioEl_C = document.getElementById('radio_c');
var convertBtn = document.getElementById('convert_btn');
var clearBtn = document.getElementById('clear_btn');
var outputEl = document.getElementById('temp_output');


////////////////////
//Define Functions//
////////////////////

// Convert Feherenheit temperature to Celcius
var convertToC = function(temp) {
 temp = (temp - 32) * (5/9);
 temp = temp.toFixed(1); // Round to one decimal place
 return temp;
}

// Convert Celcius temperature to Fahrenheit
var convertToF = function(temp) {
  temp = temp * 1.8 + 32;
  temp = temp.toFixed(1); // Round to one decimal place
  return temp;
}

// Color for fahrenheit temperature
var whatColorFahrenheit = function(temp) {
  if (temp >= 90) {
    return "red";
  }
  else if (temp <= 32) {
    return "blue";
  }
  else {
    return "green";
  }
}

// Color for celcius temperature
var whatColorCelcius = function(temp) {
  if (temp >= 32) {
    return "red";
  }
  else if (temp <= 0) {
    return "blue";
  }
  else {
    return "green";
  }
}

// Outputs boolean; true = convert to celcius, false = convert to fahrenheit
var whichTemp = function() {
  if (radioEl_C.checked) {
    console.log('The Celcius button is currently selected');
    return true;
  }
  else {
    console.log('The Fahrenheit button is currently selected');
    return false;
  }
}

// Actual function to execute on button press
// Uses inline CSS to handle colors
var outputTemperature = function() {
  console.log("You clicked the convert button or pushed the enter key");
  inputTemp = tempEl.value; // grab input value
  if (whichTemp() === true) { // If celcius button is checked...
    outputTemp = convertToC(inputTemp); // Output temp is in Celcius (input is F)
    outputEl.innerHTML = '<font color="' + whatColorCelcius(outputTemp) + '">' +
    outputTemp + '&deg C</font>';
  }
  else { // If fahrenheit button is checked
    outputTemp = convertToF(inputTemp); //output temp is Fahrenheit (input is C)
    outputEl.innerHTML = '<font color="' + whatColorFahrenheit(outputTemp) + '">' +
    outputTemp + '&deg F</font>';
  }
}

var clearInput = function() {
  console.log("You clicked the clear button")
  tempEl.value = "";
}



///////////////////////
//Add Event Listeners//
///////////////////////

convertBtn.onclick = outputTemperature;
clearBtn.onclick = clearInput;

//Event listener to listen for enter key button press in text field
tempEl.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        outputTemperature();
    }
});









