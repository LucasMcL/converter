// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

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


//////////////////////////////////////////////////////////////////////////////


///////////////////////
//Get Elements Needed//
///////////////////////
var tempEl = document.getElementById('temp_input');
var radioEl_F = document.getElementById('radio_f');
var radioEl_C = document.getElementById('radio_c');
var convertBtn = document.getElementById('convert_btn');
var clearBtn = document.getElementById('clear_btn');


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
var outputTemperature = function() {
  console.log("You clicked the convert button or pushed the enter key");
  if (whichTemp === true) {

  }
}

var clearInput = function() {
  console.log("You clicked the clear button")
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









