//Variables 
const amountInput = document.getElementById("amount");
const convertedAmountDisplay = document.getElementById("convertedamount");
const convertBtn = document.querySelector("convertBtn");
var select = document.querySelectorAll("from");
var select = document .querySelectorAll('to');



const amount = parseFloat(amountInput.value);
const fromCurrency = fromCurrencySelect.value;
const toCurrency = toCurrencySelect.value;

//Event Listener 
convertBtn.addEventListener ("click" , () =>{
      // ConvertingMoney(convertedAmountDisplay.value);
       console.log("Clicked");

});
//Function 1

async function ConvertingMoney () {
        fetch(`https://open.er-api.com/v6/latest/usd`)
        .then (response => response.json())
        .then(data => {
                const conversionRate = data.rates[toCurrency];
                const convertedAmount = amount*conversionRate;
                convertedAmountDisplay.textContent = convertedAmount.toFixed(2);
                resultElement.innerHTML =`${convertedAmount} ${toCurrency}`;
        
        });
}

//Funtion 2 
const convertCurrency = () =>{ 

        const host = 'api.frankfurter.app';
        fetch(`https://${host}/currencies`)
          .then((data) => data.json())
          .then((data) => {
                const entries = Object.entries(data);
                console.log(entries)
            //alert(`10 GBP = ${data.rates.USD} USD`);
          });

};

convertCurrency();














