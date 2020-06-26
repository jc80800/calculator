const container = document.getElementById("container");
const display = document.querySelector('.display');
const buttons = document.querySelector('.operatorBtns');

function makeDisplay(){
    let bar = document.createElement("div");
    bar.innerText = "Answer will be displayed here"
    display.appendChild(bar).className = "display-item";
}

function changeDisplay(result){
    let bar = document.createElement("div");
    bar.innerText = result;
    const oldChild = document.querySelector('.display-item');
    display.replaceChild(bar, oldChild);
    display.appendChild(bar).className = "display-item";
}

function addBtns(){
    let addBtns = document.createElement("button");
    addBtns.innerText = "Operate";
    addBtns.addEventListener('click', () => {
        let num1 = window.prompt("Choose number 1:");
        let num2 = window.prompt("Choose number 2:");
        let operator = window.prompt("Which operation:");
        let result = operate(operator, num1, num2);
        changeDisplay(result);
    });

    buttons.appendChild(addBtns).className = "button";
    
}




function operate(operator, num1, num2){
    if (operator === "add" ){
        return add(num1, num2);
    }
    else if (operator === "subtract"){
        return subtract(num1, num2);
    }
    else if (operator === "multiply"){
        return multiply(num1, num2);
    } 
    else if (operator === "divide"){
        return divide(num1, num2);
    }
    else{
        console.log("error");
    }
}

function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract (num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

makeDisplay();
addBtns();