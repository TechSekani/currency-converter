const btnsEl = document.querySelectorAll('.btn span');
const convert = document.querySelector('.convert');
let inputEl = document.getElementById('inputel');
let outputEl = document.getElementById('outputel');
const currencyList = document.getElementById('currencylist');
const currencies = {
    USD: 445.46,
    EUR: 473.09,
    GBP: 549.59,
    KD: 1453.08,
    CNY: 63.89,
}

//default values
inputEl.value = 1;
outputEl.value = currencies[currencyList.value];


//btn action
for (const btn of btnsEl) {
    btn.addEventListener('click', ()=>{
        let inputValue = btn.textContent;
        if (inputEl.value == ".") {
            inputEl.value = '';
          }
        if(inputValue == 'C'){
            inputEl.value = '';
            outputEl.value = currencies[currencyList.value];
        }else {
        inputEl.value += inputValue;
        }
    })
}

//convrsion btn
convert.addEventListener('click', ()=>{
    let currValue = currencyList.value;
    let result = inputEl.value * currencies[currValue];
    outputEl.value = result.toFixed(2);
    inputEl.value = '';
})


//onchanging currency
currencyList.addEventListener('change', ()=>{
inputEl.value = 1;
outputEl.value = currencies[currencyList.value];
})
