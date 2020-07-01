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
}

function addOperate(){
    let operationSign = ["+", "-", "*", "/"];
    for (let i = 0; i < 4; i ++){
        let additionBtn = document.createElement("button");
        for (let j = 0; j < 4; j++){
            additionBtn.innerText = operationSign[i];
        }
        additionBtn.addEventListener('click', () => {
            if (i = 0) {
                expression = expression + " + ";
            }
            else if(i = 1){
                expression = expression + " - ";
            }
            else if(i = 2){
                expression = expression + " * ";
            }
            else {
                expression = expression + " / ";
            }
            console.log(expression);
            changeDisplay(expression);
    })
    buttons.appendChild(additionBtn).className = "operateButtons";
    }
}


function readString(){
    let operate = document.createElement("button");
    operate.innerText = "="
    operate.addEventListener('click', () => {
        stringArray = expression.split(" ");
        let num1 = parseInt(stringArray[0]);
        let num2 = parseInt(stringArray[2]);
        console.log(num1 + num2);
        changeDisplay(num1 + num2);
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