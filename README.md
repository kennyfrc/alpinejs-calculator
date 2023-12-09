# Alpine.js Calculator

This project is a simple calculator built using Alpine.js, HTML, CSS, and JavaScript.

## Files

- `index.html`: This is the main HTML file that contains the structure of the calculator.
- `calculator.js`: This JavaScript file contains the logic for the calculator operations.
- `styles.css`: This CSS file contains the styles for the calculator.

## Usage

To use this calculator, you can serve the files using a simple HTTP server. For example, if you have Python installed, you can use the following command, using Python's built-in HTTP server:

```bash
python3 -m http.server 8000
```

Then, you can open the calculator in your browser by navigating to `http://localhost:8000/`.

Alternatively, you can also use other one-liner HTTP servers through this link: [https://gist.github.com/willurd/5720255](https://gist.github.com/willurd/5720255).

## JS Fiddle

You can also play around with the calculator using JS Fiddle: [https://jsfiddle.net/kennyfrc12/h9y3maoL/80/](https://jsfiddle.net/kennyfrc12/h9y3maoL/80/).


## Understanding the HTML Structure
Our calculator consists of a display section and a set of keys. The display shows the current input, the operation selected, and the result. The keys include digits, operations, and function buttons.

### Display Section
- **Calculator Result (`calculator__result`)**: Displays the calculated result.
- **Current Input (`calculator__input`)**: Shows the current input or operand.
- **Calculator Status (`calculator__status`)**: Indicates the current operation.

### Keys Section
- **Function Buttons**: 'AC' for clearing the input, '±' for toggling the sign, and '%' for percentage.
- **Operation Buttons**: Includes addition (+), subtraction (−), multiplication (×), and division (÷).
- **Digit Buttons**: Buttons for digits 0-9 and the decimal point (.).
- **Equal Button (=)**: To perform the calculation.

## Alpine.js Setup
Alpine.js works by adding directives to HTML elements. In our case, `x-data` initializes the calculator data and functions.

### Initializing Alpine.js
```html
<body x-data="calculator()">
```
This line initializes our calculator component with the `calculator` function, which we will define in JavaScript.

### Data and Methods
Our calculator will have three main data properties: `result`, `currentInput`, and `operation`. Additionally, we will define methods for inputting digits, operations, and calculating the final result.

## Implementing Calculator Logic
Here's an overview of the JavaScript functions we'll implement:

- **`calculator()`**: Initializes the data and methods.
- **`inputDigit(digit)`**: Handles digit input.
- **`inputOperation(operation)`**: Sets the current operation.
- **`calculate()`**: Performs the calculation based on the current inputs and operation.
- **`clearAll()`**: Clears all inputs and results.
- **`toggleSign()`**: Toggles the sign of the current input.

### Sample Implementation
```javascript
function calculator() {
    return {
        result: '',
        currentInput: '',
        operation: null,

        inputDigit(digit) {
            // Code to handle digit input
        },
        inputOperation(operation) {
            // Code to set the current operation
        },
        calculate() {
            // Code to perform the calculation
        },
        clearAll() {
            // Code to clear all inputs and results
        },
        toggleSign() {
            // Code to toggle the sign of the current input
        }
    };
}
```

## Interactive Elements with Alpine.js Directives
Alpine.js allows us to bind these functions to our HTML elements using directives like `x-text` and `@click`.

- **`x-text`**: This directive binds a data property to the text content of an element. For example, `x-text="result"` will display the `result` property in the corresponding div.
- **`@click`**: This directive adds a click event listener to an element. For instance, `@click="inputDigit('7')"` will call the `inputDigit` function with '7' as an argument when the button is clicked.
