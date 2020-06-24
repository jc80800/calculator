const container = document.getElementById("container");
const bar = document.querySelector('.bar');
const operatorButtons = document.querySelector('.operatorButtons');

function makeBar(){
    bar.style.setProperty
    let bar = document.createElement("div");
    bar.innerHTML = "10 + 9 = 21";
    calculationBar.appendChild(bar).className = "bar-item";
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

makeBar();