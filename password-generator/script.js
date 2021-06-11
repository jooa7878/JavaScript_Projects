const copyBtn = document.getElementById('copy');
const password = document.getElementById('pw');
const lenEl = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const symbols = '~!@#$%^&*';

let contents = '';


function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

    if(!upper.checked && !lower.checked && !number.checked && !symbol.checked)
    {
        alert('Check at least one checkbox');
        window.location.reload();
        return;
    }

    const len = lenEl.value;
    let result = '';

    if(upper.checked){
        result += (getUppercase());
    }
    if(lower.checked){
        result += (getLowercase());
    }
    if(number.checked){
        result += (getNumber());
    }
    if(symbol.checked){
        result += (getSymbol());
    }

    for(let i=result.length; i<len; i++){
        const x = generateX();
        result += x;
    }

    contents = result; 
    password.innerHTML = result + `<button id="copy">Copy</button>`;
}

function generateX() {
    const xs = [];

    if(upper.checked){
        xs.push(getUppercase());
    }
    if(lower.checked){
        xs.push(getLowercase());
    }
    if(number.checked){
        xs.push(getNumber());
    }
    if(symbol.checked){
        xs.push(getSymbol());
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', ()=>{
    console.log(contents);

    const textarea = document.createElement('textarea');

    if(contents === ''  || contents === undefined) return;

    textarea.value = contents;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});