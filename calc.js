

let numberA;
let numberB;
let count = 0;
let operator;
let result;
let equalsPressed = 0;
let screen = document.getElementById('screen');
let numbers = document.getElementsByClassName('numbers');
let operations = document.getElementsByClassName('operations'); // Haven't been able to use this yet, won't let me spread to array as with numbers.
let addbtn = document.getElementById('add');
let subtractbtn = document.getElementById('subtract');
let dividebtn = document.getElementById('divide');
let multiplybtn = document.getElementById('multiply');
let clearbtn = document.getElementById('clear');
let equalsbtn = document.getElementById('equals');

[...numbers].forEach((number) => {              // This function takes the numerical id and displays it on the screen
    number.addEventListener('click', () => { 
    if (numberA === undefined && equalsPressed === 0) {
        screen.innerText += number.id;
    } else if (numberA === undefined && equalsPressed === 1) {
        screen.innerText = '';
        screen.innerText += number.id;
        equalsPressed = 0;
    }
     else if (numberA !== undefined)
        screen.innerText += number.id;    
})
})

/* The following functions store the screen number as either A or B, then operate on them given id of operation clicked.
*/

addbtn.addEventListener('click', () => {        
    if (count == 0) {
        numberA = parseFloat(screen.innerText); 
        operator = "add";
        numAStateUpdate() 
    } else if (count >= 1){
        numberB = parseFloat(screen.innerText); 
        numBStateUpdate();
        operator = "add";
        console.log(operator)
    }
}) 

dividebtn.addEventListener('click', () => {
    if (count == 0) {
        numberA = parseFloat(screen.innerText); 
        operator = "divide";
        numAStateUpdate() 
    } else if (count >= 1){
        numberB = parseFloat(screen.innerText); 
        numBStateUpdate();
        operator = "divide";
        console.log(operator)
    }
})

subtractbtn.addEventListener('click', () => {
    if (count == 0) {
        numberA = parseFloat(screen.innerText); 
        operator = "subtract";
        numAStateUpdate() 
    } else if (count >= 1){
        numberB = parseFloat(screen.innerText); 
        numBStateUpdate();
        operator = "subtract";
        console.log(operator)
    }
})

multiplybtn.addEventListener('click', () => {
    if (count == 0) {
        numberA = parseFloat(screen.innerText); 
        operator = "multiply";
        numAStateUpdate() 
    } else if (count >= 1){
        numberB = parseFloat(screen.innerText); 
        numBStateUpdate();
        operator = "multiply";
        console.log(operator)
    }
})

equalsbtn.addEventListener('click', () => {
    numberB = parseFloat(screen.innerText); //Important. This makes it operate correctly rather than holding the previous value waiting for +, -, *, or /.
    operate(numberA, numberB);
    screen.innerText = numberA;
    result = numberA;
    // numberA = undefined;
    equalsPressed = 1; 
    count = 0;
    numberB = numberA
    numberA = 0;
})

clearbtn.addEventListener('click', () => {
    numberA = undefined;
    operator = undefined;
    numberA = undefined;
    numberB = undefined;
    screen.innerText = '';
    equalsPressed = 0; 
    count = 0;
})

function numAStateUpdate() {
        count++;
        console.log(operator)
        screen.innerText = '';
}

function numBStateUpdate() {
        operate(numberA, numberB)
        console.log(operator)
        count ++;
        screen.innerText = '';
        
}

function add(a, b) {
numberA = a + b;
screen.innerText = numberA;
    return numberA;
}

function subtract(a, b) {
    numberA = a - b;
    screen.innerText = numberA;
        return numberA;
}

function multiply(a, b) {
    numberA = a * b;
screen.innerText = numberA;
    return numberA;
}

function divide(a, b) {
    numberA = a / b;
screen.innerText = numberA;
    return numberA;
}



function operate(numberA, numberB) {
        if (operator == "add") {
            add(numberA, numberB)
            console.log(numberA)
            return numberA;
        }
        else if (operator == "subtract") {
            subtract(numberA, numberB)
            console.log(numberA)
            return numberA;
        }
        else if (operator == "multiply") {
            multiply(numberA, numberB)
            console.log(numberA)
            return numberA;
        }
        else if (operator == "divide") {
            divide(numberA, numberB)
            console.log(numberA)
            return numberA;
        }
        else if (operator === nil) {
            return numberA;
        }
}