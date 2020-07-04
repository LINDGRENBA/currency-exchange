import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { callAPI, makeExchange } from './currency-exchange-service';

//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {

    const usDollarInput = $("#us-dollars").val();
    const convertToInput = $("#currency-code").val();

    (async () => {
      let exchangeRate = new makeExchange();
      const response = await exchangeRate.conversion_rates.USD; 
      getRate(response);
    })();

    // let currencyCodes = ['EUR', 'TRY', 'KRW', 'RUB', 'MXN', 'JPY']; //do loop, if convertToInput = currencyCodes[i], then add currencyCodes[i] to result.conversion_rates.{i goes here} to get the specific value, then multiply it by the user's input for us dollars

    // callAPI();

    function getRate(response) {
      if(response) {
        //DO THIS - SUCCESSFUL THING
      } else {
        //DO THIS - ERROR
      }
    }

  });
});


