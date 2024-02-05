const convertCurrency =() => {
                const amountInput = document.getElementById("amount");
                const fromCurrencySelect = document.getElementById("from");
                const toCurrencySelect = document.getElementById("to");
                const convertedAmountDisplay = document.getElementById("converted amount");




}

fetch(`https://open.er-api.com/v6/latest/usd`)
.then (response => e=response.json())
.then(data => {
             const conversionRate = data.rates[toCurrency];
             const convertedAmount = amount*conversionRate;
             convertedAmountDisplay.textContent.toFixed(2);
     
})

.catch( error =>console.error(error));