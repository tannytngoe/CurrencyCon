//Currencies list 
const currency_list = ["USD" ,"AUD", "GBP" ,"BGN" ,"BRL","CAD" ,"CHF" ,"CNY" ,"CZK" ,"DKK" ,"EUR" ,"GBP","HKD","HUF" ,"IDR","ILS","INR" ,"ISK" ,"JPY" ,"KRW" ,"MXN","NOK","NZD"  ,"PHP" ,"PLN", "RON" ,"SEK" ,"SGD" ,"THB" ,"TRY" ,"ZAR"];


//Variables

        const  fromCurrencySelect = document.getElementById("from");
        const toCurrencySelect= document .getElementById("to");
        const amountInput = document.getElementById("amount");
        const convertedAmountInput = document.getElementById("convertedamount");
        const convertBtn = document.getElementById("convertBtn")

const amount = parseFloat(amountInput.value);
const fromCurrency = fromCurrencySelect.value;
const toCurrency = toCurrencySelect.value;

//Event Listener 
convertBtn.addEventListener("click ",() => {
       //ConvertingMoney(convertedAmountDisplay.value);
       console.log("Clicked") ;

});

//Function 1 

async function ConvertingMoney(){
    fetch(`https://open.er-api.com/v6/latest/usd`)
    .then ((response) => response.json ())
    .then((data)  =>{
          const conversionRate = data.rates [toCurrency];
          const convertedAmount = amount * conversionRate;
          convertedAmountDisplay.textContent = convertedAmount.toFixed(2);
          resultElement.innerHTML = `${convertedAmount} ${toCurrency}`;

    });


    }


//loop thru cuurency list 
//create an option
//set value and teext to currency 
currency_list.forEach((currency)    =>{
            const option = document.createElement ("option");
            option.value = currency;
            option.text = currency;
            fromCurrencySelect.appendChild(option);

            if (currency !== fromCurrencySelect.value){
              toCurrencySelect.appendChild(option.cloneNode(true));
            }

});

            




     
















