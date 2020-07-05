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

      function showExchangeRate(response) {
        let showRate = response.conversion_rates[code];
        let rateTotal = showRate * usDollarInput;
        $("#usd").text("$" + usDollarInput + " USD");
        $("#other-currency").text(rateTotal + " " + code);
        $("#us-dollars").val("");
        $(".results").show();
        $("#error").hide();
      };


      // let request = new XMLHttpRequest();
      // const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  
      // request.onreadystatechange = function() {
      //   if(this.readyState === 4 && this.status === 200) {
      //     const response = JSON.parse(this.responseText);
      //     showExchangeRate(response);
      //   }
      // };
  
      // request.open("GET", url, true);
      // request.send();
  
      // const showExchangeRate = function(response) {
      //   let showRate = response.conversion_rates[code];
      //   let rateTotal = showRate * usDollarInput;
      //   $("#usd").text("$" + usDollarInput + " USD");
      //   $("#other-currency").text(rateTotal + " " + code);
      //   $("#us-dollars").val("");
      //   $(".results").show();
      //   $("#error").hide();
      // };
    }
  });
});


