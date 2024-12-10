let currentInput = '';
let previousInput = '';
let operator = '';
let history = [];

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function operate(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}

function clearScreen() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('result').value = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    updateHistory(`${previousInput} ${operator} ${currentInput} = ${result}`);
    currentInput = result.toString();
    document.getElementById('result').value = currentInput;
}

function calculatePower() {
    if (currentInput === '') return;
    let result = Math.pow(parseFloat(currentInput), 2);
    updateHistory(`${currentInput}² = ${result}`);
    currentInput = result.toString();
    document.getElementById('result').value = currentInput;
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    let result = Math.sqrt(parseFloat(currentInput));
    updateHistory(`√${currentInput} = ${result}`);
    currentInput = result.toString();
    document.getElementById('result').value = currentInput;
}

function updateHistory(entry) {
    history.push(entry);
    if (history.length > 5) {
        history.shift(); // Keep only the last 5 operations
    }
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
