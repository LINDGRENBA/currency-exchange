import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './currency-exchange-service';


//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {

    const usDollarInput = $("#us-dollars").val();
    const code = $("#currency-code").val();
    //call a function that checks to make sure code is valid, then write function on other page
    if(!usDollarInput || usDollarInput < 0) {
      $("#error").text("Please enter a whole number greater than 0.");
      $("#error").show();
      $(".results").hide();
    } else {
      (async () => {
        let exchangeService = new ExchangeService();
        const response = await exchangeService.getExchangeRate();
        showExchangeRate(response);
      })();
      }

    function showExchangeRate(response) {
      if(response) {
        let showRate = response.conversion_rates[code];
        let rateTotal = showRate * usDollarInput;
        $("#usd").text("$" + usDollarInput + " USD");
        $("#other-currency").text(rateTotal + " " + code);
        $("#us-dollars").val("");
        $(".results").show();
        $("#error").hide();
      } else {
        $("#usd").text('There was an error handling your request.');
        $("#other-currency").text('Please check your inputs and try again.');
      }
    }
  });
});


