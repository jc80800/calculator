const container = document.getElementById("container");
const display = document.querySelector('.display');
const operatorButtons = document.querySelector('.operatorButtons');

function makeDisplay(){
    let bar = document.createElement("div");
    bar.innerHTML = "10 + 9 = 21";
    display.appendChild(bar).className = "display-item";
}





function operate(operator, num1, num2){
    if (operator === "add" ){
        add(num1, num2);
    }
    else if (operator === "subtract"){
        subtract(num1, num2);
    }
    else if (operator === "multiply"){
        multiply(num1, num2);
    } 
    else if (operator === "divide"){
        divide(num1, num2);
    }
    else{
        console.log("error");
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

makeDisplay();