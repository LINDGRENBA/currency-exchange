import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { makeExchange } from './currency-exchange-service';

//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {

    const usDollarInput = $("#us-dollars").val();
    const code = $("#currency-code").val();
    //DELETE BELOW
    console.log('code from user: ' + code);

    (async () => {
      let exchangeRate = new makeExchange();
      const response = await exchangeRate.getCurrencyExchangeRate();
      if(!response) {
        $("#error").html(`<h1>There has been an error processing your request</h1>`);
      } else {
        getRate(response);
        //DELETE BELOW
        console.log('async response: ' + response);  //THIS IS RETURNING AN OBJECT, BUT TOO LATE
      }
    })();

    // let currencyCodes = ['EUR', 'TRY', 'KRW', 'RUB', 'MXN', 'JPY']; //do loop, if convertToInput = currencyCodes[i], then add currencyCodes[i] to result.conversion_rates.{i goes here} to get the specific value, then multiply it by the user's input for us dollars

    function getRate(response) {
      if(response) {
        let returnRate = response.conversion_rates + "." + code;
        //DELETE BELOW
        console.log('in getRate first: ' + returnRate);  //THIS IS HAPPENING BEFORE ASYNC RETURNS
        let totalCurrency = usDollarInput * returnRate;
        //DELETE BELOW
        console.log('in getRate second: ' + totalCurrency);  //THIS IS HAPPENING BEFORE ASYNC RETURNS
        $("#usd").text(usDollarInput);
        $("#other-currency").text(totalCurrency);
      } else {
        $("#error").html(`<h1>There has been an error processing your request</h1>`);
      }
    }
    //put line below into getRate() with successful response
    // conversion_rates.USD <--  replace USD with appropriate 3 letter code and multiply by US dollar input

  });
});


