const display = document.getElementById('display');
function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
    highlightButton(value);
}
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
        highlightButton('='); 
    } catch (error) {
        display.value = 'Error'; 
    }
}
function clearDisplay() {
    display.value = '0';
    highlightButton('Clear');
}
function deleteLastCharacter() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
    highlightButton('Backspace');
}
function highlightButton(value) {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        if (button.textContent === value) {
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 200); 
        }
    });
}
document.addEventListener('keydown', (event) => {
    const key = event.key;

    
    if (/[0-9+\-*/.=]/.test(key)) {
        if (key === '=' || key === 'Enter') {
            calculate();
        } else {
            appendValue(key);
        }
    }
        
    if (key === 'Backspace') {
        deleteLastCharacter();
    }
});