/*
 * By: Monolith Growth Consulting
 * monolithgrowth.com
 */
function calculator() {
    return {
        currentInput: '0',
        result: '',
        operation: null,
        previousKey: '',
        clearAll() {
          this.currentInput = '0';
          this.result = '';
          this.operation = null;
          this.previousKey = '';
        },
        clearEntry() {
            this.currentInput = '';
        },
        inputDigit(digit) {
          const maxDigits = 10;

          if (this.currentInput === 'Infinity') {
              return;
          }

          if (this.previousKey === 'operator' || this.previousKey === 'calculate') {
              this.currentInput = '0';
          }
          if (this.currentInput === '0') {
              this.currentInput = '';
          }
          this.currentInput += digit;
          this.previousKey = 'digit';

          if (this.currentInput.length > maxDigits) {
              this.currentInput = parseFloat(this.currentInput).toExponential(3);
          }
        },
        inputDecimal() {
          if (!this.currentInput.includes('.')) {
              this.currentInput += '.';
          }
          this.previousKey = 'decimal';
        },
        inputOperation(operator) {
            if (this.operation && this.previousKey === 'digit') {
                this.calculate();
            }
            this.operation = operator;
            this.result = this.currentInput;
            this.previousKey = 'operator';
        },
        toggleSign() {
            this.currentInput = this.currentInput ? String(-parseFloat(this.currentInput)) : '';
            this.previousKey = 'toggleSign';
        },
        calculatePercentage() {
            if (this.currentInput) {
                this.currentInput = String(parseFloat(this.currentInput) / 100);
                this.result = this.currentInput;
            }
            this.previousKey = 'percentage';
        },
        calculate() {
            let calculationResult;
            const current = parseFloat(this.currentInput);
            const previous = parseFloat(this.result);
            const maxDigits = 10;

            if (isNaN(previous) || isNaN(current)) return;

            switch (this.operation) {
                case '+':
                    calculationResult = previous + current;
                    break;
                case '-':
                    calculationResult = previous - current;
                    break;
                case '*':
                    calculationResult = previous * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("You can't divide by zero.");
                        return;
                    }
                    calculationResult = previous / current;
                    break;
                default:
                    return;
            }

            if (calculationResult.toString().length > maxDigits || calculationResult === 0) {
                calculationResult = calculationResult.toExponential(3);
            } else {
                const decimalPlaces = maxDigits - Math.floor(calculationResult).toString().length;
                calculationResult = parseFloat(calculationResult.toFixed(decimalPlaces < 0 ? 0 : decimalPlaces));
            }

            this.currentInput = String(calculationResult);
            this.operation = null;
            this.result = '';
            this.previousKey = 'calculate';
        }
    };
}
