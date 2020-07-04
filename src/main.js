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
    // DELETE BELOW
    console.log('initial code: ' + code);

    (async () => {
      let exchangeRate = new makeExchange();
      const response = await exchangeRate.getCurrencyExchangeRate(code);  //do we need to .getCurrencyRateExchange(param)? with something passed?
      if(!response) {
        $("#error").html(`<h1>There has been an error processing your request</h1>`);
      } else {
        getRate(response);
        //DELETE BELOW
        console.log('async response: ' + response);
      }
    })();

    // let currencyCodes = ['EUR', 'TRY', 'KRW', 'RUB', 'MXN', 'JPY']; //do loop, if convertToInput = currencyCodes[i], then add currencyCodes[i] to result.conversion_rates.{i goes here} to get the specific value, then multiply it by the user's input for us dollars

    // callAPI();

    function getRate(response) {
      if(response) {
        $("#usd").text(usDollarInput);
        let totalCurrency = usDollarInput * response;
        $("#other-currency").text(totalCurrency);
      } else {
        $("#error").html(`<h1>There has been an error processing your request</h1>`);
      }
    }
    //put line below into getRate() with successful response
    // conversion_rates.USD <--  replace USD with appropriate 3 letter code and multiply by US dollar input

  });
});


