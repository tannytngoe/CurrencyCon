const convertCurrency =() => {
                const amountInput = document.getElementById("amount");
                const fromCurrencySelect = document.getElementById("from");
                const toCurrencySelect = document.getElementById("to");
                const convertedAmountDisplay = document.getElementById("convertedamount");
                const convertBtn = document.querySelector("convertBtn");


const amount = parseFloat(amountInput.value);
const fromCurrency= fromCurrencySelect.value;
const toCurrency = toCurrencySelect.value;


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
.then((data) =>data.json())
.then((data)=>{
        const entries = Object.entries(data);
        console.log(entries)
}
)





async function ConvertingMoney () {
     fetch(`https://open.er-api.com/v6/latest/usd`)
     .then (response => response.json())
     .then(data => {
             const conversionRate = data.rates[toCurrency];
             const convertedAmount = amount*conversionRate;
             convertedAmountDisplay.textContent = convertedAmount.toFixed(2);
             resultElement.innerHTML =`${convertedAmount} ${toCurrency}`
     
     })
}




convertBtn.addEventListener ("click" , () =>{
          ConvertingMoney(convertedAmountDisplay.value); 

}) 
}




