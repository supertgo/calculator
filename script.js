 //DOM selectors
let displayEl = document.querySelector('#display');
const containerEl = document.querySelectorAll("#container");
const operandos = document.querySelectorAll('.operandos');
const operadores = document.querySelectorAll('.operadores');
const equalEl = document.querySelector('#equal');
const pontoEl = document.querySelector('#ponto');
const clearEl = document.querySelector('#clear');
const deleteEl = document.querySelector('#delete');
const toggleNegativeEl = document.querySelector('#toggleNegative');

//a, b and the operation
let firstOperand = null;
let secondOperand = null;
let operation = null;


//functions 
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
    
    else 
        displayEl.textContent = param;
    

}

//show numbers on display
function acrescentaDisplay(number) {

    verificaDisplay();

    if (displayEl.textContent == '0' 
        || displayEl.textContent === operation 
        || displayEl.textContent === 'RESETED')

        displayEl.textContent = number;
    
    else
        displayEl.textContent += number;
}

//show signal on display
function acrescentaSinal (operador) {
    console.log(operador);
    firstOperand = Number(displayEl.textContent);
    operation = operador;
    
     //procurar o vídeo para mostrar a barrinha piscando
    
     displayEl.textContent = operation;
     
}
//show dot on display
function acrescentaPonto () {

    verificaDisplay();

    if (displayEl.textContent.includes('.') 
        ||  displayEl.textContent === 'RESETED' 
        || displayEl.textContent === operation) return; //Already have a point
    
    else  displayEl.textContent += '.';
    

}

//calc operations
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
            return null //There is no other operation
    }
}

//equal click
function equals () {

   
    if (operation === null) return;

    if (operation === '/' && displayEl.textContent == 0){
        alert('You cant divide by zero\n Você não pode dividir por zero');
        mudaDisplay('ERROR');
        
    }

    secondOperand = Number(displayEl.textContent);
    displayEl.textContent = operacao(firstOperand, operation, secondOperand);
    verificaDisplay();

}

//clear calculator same as refresh
function clear() {

    //reset all variables
    firstOperand = 0;
    secondOperand = 0;
    operation = null;

    mudaDisplay('RESETED');
   
}


function deleteButton() {

    if (displayEl.textContent === 'RESETED') return;

    displayEl.textContent = displayEl.textContent.slice(0, -1);

    if (displayEl.textContent === '')
        displayEl.textContent = '0';
}

//append negative Signal on numbers
function toggleNegative() {
    
    if (displayEl.textContent[0] === '-')
        displayEl.textContent = displayEl.textContent.slice(1);
    
    else
        displayEl.textContent = '-' + displayEl.textContent;
}

// calc by keyboard
function byKeyBoard (e) {
    

    if (e.key >= 0 && e.key <= 9) acrescentaDisplay(e.key);

    if (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-') acrescentaSinal(e.key);

    if (e.key === '.') acrescentaPonto();

    if (e.key === 'Enter') equals();

    if (e.key === 'Delete') clear();

    if (e.key === 'Backspace') deleteButton();

    else
        return;  //The order keydowns does not matter

}

// if the amout of number is bigger, the dive font is reduced
function verificaDisplay () {
    if (displayEl.textContent.length >= 16 && displayEl.textContent.length < 20)
        displayEl.style.fontSize = '2em';

    if (displayEl.textContent.length >= 20 && displayEl.textContent.length < 27)
        displayEl.style.fontSize = '1.5em';

    if (displayEl.textContent.length >= 27 && displayEl.textContent.length < 41)
        displayEl.style.fontSize = '1em';

    if (displayEl.textContent.length >= 41)
        alert('Too much numbers, men!!');
}

//events
window.addEventListener('keydown', byKeyBoard);
operandos.forEach((cont) => cont.addEventListener('click', () => acrescentaDisplay(cont.value)));
operadores.forEach((operador) => operador.addEventListener('click', () => acrescentaSinal(operador.value)));
pontoEl.addEventListener('click', acrescentaPonto);
equalEl.addEventListener('click', equals);
clearEl.addEventListener('click', clear);
deleteEl.addEventListener('click', deleteButton);
toggleNegativeEl.addEventListener('click', toggleNegative);




