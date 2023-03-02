// import DOMPurify from 'dompurify';

const alertButton = document.getElementById("alert");
const confirmButton = document.getElementById('confirm');
const promptButton = document.getElementById('prompt');

const output = document.getElementById('output');        
function alert() {
    alertButton.showModal();
}

function confirm() {
    confirmButton.showModal();
}

function prompt() {            
    promptButton.showModal();
}

function confirmT(val) {
    output.textContent = `Confirm result: ${val}`;
    closeDialog();
}

function showPrompt() {
    let input = DOMPurify.sanitize(document.querySelector('input').value);
    if (input == ''){
        output.textContent = 'User didn’t enter anything';
    } else {
        output.textContent = `Prompt result: ${input}`;
    }
    closeDialog();
}

function closeDialog() {
    const dialog = document.querySelector('dialog[open]');
    dialog.close();
}