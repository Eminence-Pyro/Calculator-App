// Calculator module

const display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function appendToDisplay(value) {
  if (value === '.' && display.value.includes('.')) return;
  if ((value === '+' || value === '-' || value === '*' || value === '/') && 
      (display.value === '' || ['+', '-', '*', '/'].includes(display.value.slice(-1)))) return;
  display.value += value;
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        let expression = display.value;

        // Prevent unsafe characters
        if (!/^[0-9+\-*/().% ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        // Convert 'x' to '*'
        expression = expression.replace(/x/g, "*");

        // Handle division by zero
        if (/\/0(?!\.)/.test(expression)) {
            display.value = "Infinity";
            return;
        }

        // Evaluate the expression safely
        display.value = Function('"use strict"; return (' + expression + ')')();
    } catch (error) {
        display.value = "Error";
    }
}
