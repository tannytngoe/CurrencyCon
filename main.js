//Variables 

var select = document.querySelectorAll("from");
var select = document .querySelectorAll("to");
amount = document.getElementById("amount");
convertedamount = document.getElementById("convertedamount");




//Funtion 1


        const host = 'api.frankfurter.app';
        fetch(`https://${host}/currencies`)
          .then((data) => data.json())
          .then((data) => {
                const entries = Object.entries(data);
            console.log(entries)
            //alert(`10 GBP = ${data.rates.USD} USD`);

            for (i =0; i < entries.length; i++){
                select[0].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
                select[1].innerHTML +=  `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
               
         }
         });

            


     
















