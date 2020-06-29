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

let expression = "";

function addBtns(){
    let addBtns = document.createElement("button");
    addBtns.innerText = "1";
    addBtns.addEventListener('click', () => {
        expression = expression + 1;
        console.log(expression);
    });
    buttons.appendChild(addBtns).className = "button";
}

function addOperate(num1){
    let additionBtn = document.createElement("button");
    additionBtn.innerText = "+";
    additionBtn.addEventListener('click', () => {
        expression = expression + " + ";
        console.log(expression);
    })
    buttons.appendChild(additionBtn).className = "button";
}

function readString(){
    let operate = document.createElement("button");
    operate.addEventListener('click', () => {
        stringArray = expression.split(" ");
        let num1 = parseInt(stringArray[0]);
        let num2 = parseInt(stringArray[2]);
        console.log(num1 + num2);
    })
    buttons.appendChild(operate).className = "button";
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
addOperate();
readString();