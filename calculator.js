/*
 * By: Monolith Growth Consulting
 * monolithgrowth.com
 */
function calculator() {
    return {
        currentInput: '',
        result: '',
        operation: null,
        previousKey: '',
        clearAll() {
            this.currentInput = '';
            this.result = '';
            this.operation = null;
            this.previousKey = '';
        },
        clearEntry() {
            this.currentInput = '';
        },
        inputDigit(digit) {
            if (this.previousKey === 'operator' || this.previousKey === 'calculate') {
                this.currentInput = '';
            }
            this.currentInput += digit;
            this.previousKey = 'digit';
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
                this.result = '';
            }
            this.previousKey = 'percentage';
        },
        calculate() {
            let calculationResult;
            const current = parseFloat(this.currentInput);
            const previous = parseFloat(this.result);
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

            this.currentInput = String(calculationResult);
            this.operation = null;
            this.result = '';
            this.previousKey = 'calculate';
        }
    };
}
