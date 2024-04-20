let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue.slice(-1) !== '+' && displayValue.slice(-1) !== '-' && displayValue.slice(-1) !== '*' && displayValue.slice(-1) !== '/') {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}
// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
      // Append number, decimal, or operator to display
      if (key === 'Enter') {
        calculate();
      } else {
        appendToDisplay(key);
      }
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  
  // Error handling
  function calculate() {
    try {
      const result = eval(displayValue);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid expression');
      }
      displayValue = result.toString();
      document.getElementById('display').value = displayValue;
    } catch (error) {
      displayValue = 'Error';
      document.getElementById('display').value = displayValue;
    }
  }
  
  // Square root function
  function squareRoot() {
    const number = parseFloat(displayValue);
    if (number >= 0) {
      displayValue = Math.sqrt(number).toString();
      document.getElementById('display').value = displayValue;
    } else {
      displayValue = 'Error';
      document.getElementById('display').value = displayValue;
    }
  }
  
  // Percentage calculation function
  function calculatePercentage() {
    const number = parseFloat(displayValue);
    displayValue = (number / 100).toString();
    document.getElementById('display').value = displayValue;
  }
  
  // Memory functions
  let memory = 0;
  
  function memoryPlus() {
    memory += parseFloat(displayValue);
  }
  
  function memoryMinus() {
    memory -= parseFloat(displayValue);
  }
  
  function memoryRecall() {
    displayValue = memory.toString();
    document.getElementById('display').value = displayValue;
  }
  
  function memoryClear() {
    memory = 0;
  }
  
