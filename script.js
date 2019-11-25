class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear();
    }

}

function clear() {
    this.currentoperand = '';
    this.previousoperand = '';
    this.operation = undefined;

}

function deletee() {

}

function appendNumber(number) {
    this.currentoperand = number
}

function chooseOperation(operation) {

}

function compute() {

}

function updateDisplay() {
    this.currentOperandText.innerText = this.currentoperand;
}



const numberbuttons = document.querySelectorAll('[data-number]');
const operatorbutton = document.querySelectorAll('[data-operation]');
const deletebutton = document.querySelector('[data-delete]');
const clearall = document.querySelector('[data-all-clear]');
const equalbutton = document.querySelector('[data-equal]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText)

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})