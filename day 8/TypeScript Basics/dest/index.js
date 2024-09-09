"use strict";
let display = document.getElementById("input");
let buttons = document.querySelectorAll(".key");
let number1 = "";
let number2 = "";
let symbol = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const dataValue = button.getAttribute("data-value") || "";
        if (dataValue == "C") {
            number1 = "";
            number2 = "";
            symbol = "";
            display.value = "";
        }
        else if (['+', '-', '*', '/'].includes(dataValue)) {
            if (number1 && number2 && symbol) {
                number1 = calculate(number2, number1, symbol);
                number2 = number1;
                symbol = "";
            }
            number2 = number1;
            number1 = "";
            symbol = dataValue;
        }
        else if (dataValue == "=") {
            if (number1 && number2 && symbol) {
                number1 = calculate(number2, number1, symbol);
                display.value = number1;
                number2 = "";
                symbol = "";
            }
        }
        else {
            number1 += dataValue;
            display.value = number1;
        }
    });
});
function calculate(numb2, numb1, syb) {
    let num2 = parseFloat(numb2);
    let num1 = parseFloat(numb1);
    switch (syb) {
        case "+": return (num2 + num1).toString();
        case "-": return (num2 - num1).toString();
        case "*": return (num2 * num1).toString();
        case "/": return (num2 / num1).toString();
        default: return "";
    }
}
