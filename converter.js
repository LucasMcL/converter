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

//Overall structure:
  //Get elements needed
  //Define functions
  //Add event listeners



// Convert Feherenheit temperature to Celcius
function toCelsius (temp) {
 temp = (temp - 32) * (5/9);
 temp = temp.toFixed(1); // Round to one decimal place
 return temp;
}

// Convert Celcius temperature to Fahrenheit
function toFahrenheit (temp) {
  temp = temp * 1.8 + 32;
  temp = temp.toFixed(1); // Round to one decimal place
  return temp;
}
