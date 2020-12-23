let displayEl = document.querySelector('#display');
const containerEl = document.querySelectorAll("#container");
const operandos = document.querySelectorAll('.operandos');
const operadores = document.querySelectorAll('.operadores');
const equalEl = document.querySelector('#equal');
const pontoEl = document.querySelector('#ponto');


let firstOperand = null;
let secondOperand = null;
let operation = null;

//criar uma função que reseta a calculadora

function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function mudaDisplay(param) {

    if (param === ' ')
     displayEl.textContent = '';
    
    else {
        displayEl.textContent = param;
    }

}

function acrescentaDisplay(number) {
    if (displayEl.textContent == '0' || displayEl.textContent === operation)
        displayEl.textContent = number;
    
    else
        displayEl.textContent += number;
}

function acrescentaSinal (operador) {
    console.log(operador);
    firstOperand = Number(displayEl.textContent);
    operation = operador;
    
     //procurar o vídeo para mostrar a barrinha piscando
    
     displayEl.textContent = operation;
     
}

function acrescentaPonto () {


    if (displayEl.textContent.includes('.')) return; //Already have a point

    else  displayEl.textContent += '.';
    

}

function operacao(a,operation, b) {
    
    switch (operation){
        case '+':
            return add(a, b);

        case '-': 
            return subtract(a, b);

        case  '*': 
            return multiply(a, b);

        case '/':
            return divide (a, b);

        default:
            return null //Não existe outra operação
    }
}
function equals () {

    
    if (operation === null) return;

    if (operation === '/' && displayEl.textContent == 0){
        alert('You cant divide by zero\n Você não pode dividir por zero');
        mudaDisplay('ERROR');
        
    }

    console.log(displayEl.textContent);

    secondOperand = Number(displayEl.textContent);
    displayEl.textContent = operacao(firstOperand, operation, secondOperand);

}


operandos.forEach((cont) => cont.addEventListener('click', () => acrescentaDisplay(cont.value)));
operadores.forEach((operador) => operador.addEventListener('click', () => acrescentaSinal(operador.value)));
pontoEl.addEventListener('click', acrescentaPonto);
equalEl.addEventListener('click', equals);



