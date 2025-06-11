// Calculator App

function calculate() {
  try {
    // Evaluate the expression in the display
    let result = eval(display.value);
    // Return the result as a string
    return result.toString();
  } catch (error) {
    // If there's an error, return "Error"
    return "Error";
  }
}
