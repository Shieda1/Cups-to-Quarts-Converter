// https://www.omnicalculator.com/conversion/cups-to-quarts-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const quartsRadio = document.getElementById('quartsRadio');
const cupsRadio = document.getElementById('cupsRadio');

let quarts;
let cups = v; 

// labels of the inpust
const variable = document.getElementById('variable');

quartsRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Quarts';
  quarts = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(quartsRadio.checked)
    result.textContent = `Quarts = ${computequarts().toFixed(5)}`;

  else if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;
})

// calculation

function computequarts() {
  return Number(cups.value) / 4;
}

function computecups() {
  return Number(quarts.value) * 4;
}