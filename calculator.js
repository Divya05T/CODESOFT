// Select all buttons and display screen
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

// Variable to store the current input and result
let currentInput = '';

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        // If the button is the clear button, reset the display
        if (value === 'C') {
            currentInput = '';
            display.textContent = '0';
        } 
        // If the button is the equals button, evaluate the expression
        else if (value === '=') {
            try {
                currentInput = eval(currentInput); // Evaluate the expression
                display.textContent = currentInput;
            } catch (e) {
                display.textContent = 'Error'; // Display error for invalid expressions
            }
        } 
        // For all other buttons, update the input and display
        else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});