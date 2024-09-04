var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');

        if (value === 'AC') {
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = '';
        } else if (value === '+/-') {
            if (display.innerText[0] === '-') {
                display.innerText = display.innerText.slice(1);
            } else {
                display.innerText = '-' + display.innerText;
            }
        } else if (value === '+' || value === '-' || value === '/' || value === '*') {
            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = '';
        } else if (value === '=') {
            operand2 = parseFloat(display.innerText);
            if (operator !== null && operand2 !== null) {
                var result;
                switch (operator) {
                    case '+':
                        result = operand1 + operand2;
                        break;
                    case '-':
                        result = operand1 - operand2;
                        break;
                    case '*':
                        result = operand1 * operand2;
                        break;
                    case '/':
                        result = operand2 !== 0 ? operand1 / operand2 : 'Error';
                        break;
                    default:
                        result = 'Error';
                }
                display.innerText = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            if (display.innerText === 'Error' || display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
}
