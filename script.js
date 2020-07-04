const container = document.getElementById("container");
const display = document.querySelector('.display');
const buttons = document.querySelector('.numberBtns');
const operatingbuttons = document.querySelector('.operatingBtns');
const equalbuttons = document.querySelector('.equalBtn');
const zero = document.querySelector('.zero');

function makeDisplay(){
    let bar = document.createElement("div");
    bar.innerText = " "
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
    for(let i = 1; i < 10; i++){
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.addEventListener('click', () => {
            expression =expression + i;
            console.log(expression);
            changeDisplay(expression);
        })
        buttons.appendChild(btn).className = "button";
    }
    let btn = document.createElement("button");
        btn.innerText = "0";
        btn.addEventListener('click', () => {
            expression =expression + 0;
            console.log(expression);
            changeDisplay(expression);
        })
        zero.appendChild(btn).className = "button";
}

function addOperate(){
    additionBtn();
    subtractBtn();
    multiplyBtn();
    divideBtn();
}

function additionBtn() {
    let additionBtn = document.createElement("button");
    additionBtn.innerText = "+";
    additionBtn.addEventListener('click', () => {
        expression = expression + " + ";
        changeDisplay(expression);
    })
    operatingbuttons.appendChild(additionBtn).className = "additionBtn";
}

function subtractBtn() {
    let additionBtn = document.createElement("button");
    additionBtn.innerText = "-";
    additionBtn.addEventListener('click', () => {
        expression = expression + " - ";
        changeDisplay(expression);
    })
    operatingbuttons.appendChild(additionBtn).className = "additionBtn";
}

function multiplyBtn() {
    let additionBtn = document.createElement("button");
    additionBtn.innerText = "*";
    additionBtn.addEventListener('click', () => {
        expression = expression + " * ";
        changeDisplay(expression);
    })
    operatingbuttons.appendChild(additionBtn).className = "additionBtn";
}

function divideBtn() {
    let additionBtn = document.createElement("button");
    additionBtn.innerText = "/";
    additionBtn.addEventListener('click', () => {
        expression = expression + " / ";
        changeDisplay(expression);
    })
    operatingbuttons.appendChild(additionBtn).className = "additionBtn";
}


function readString(){
    let operate = document.createElement("button");
    operate.innerText = "="
    operate.addEventListener('click', () => {
        stringArray = expression.split(" ");
        let num1 = parseInt(stringArray[0]);
        let num2 = parseInt(stringArray[2]);
        let operation = stringArray[1];
        if (operation === "+"){
            changeDisplay(num1 + num2);
        }
        else if (operation === "-"){
            changeDisplay(num1 - num2);
        }
        else if (operation === "*"){
            changeDisplay(num1 * num2);
        }
        else {
            changeDisplay(num1 / num2);
        }
        expression = "";
    })
    equalbuttons.appendChild(operate).className = "button";
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