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
    const codeIsValid = checkValidCode(code);
    if(!usDollarInput || usDollarInput < 0 || !codeIsValid) {
      $("#error").text("Please enter a whole number greater than 0 and check to be sure you have selected a valid currency.");
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
      if(!response) {
        $("#usd").text('There was an error handling your request.');
        $("#other-currency").text('Please check your inputs and try again.');
      } else {
        let showRate = response.conversion_rates[code];
        let rateTotal = showRate * usDollarInput;
        $("#usd").text("$" + usDollarInput + " USD");
        $("#other-currency").text(rateTotal + " " + code);
        $("#us-dollars").val("");
        $(".results").show();
        $("#error").hide();
      }
    }
  });
});

