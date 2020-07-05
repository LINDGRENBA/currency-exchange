import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";


//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {

    const usDollarInput = $("#us-dollars").val();
    const code = $("#currency-code").val();
    console.log(code);

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        showExchangeRate(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const showExchangeRate = function(response) {
      let showRate = response.conversion_rates[code];
      let rateTotal = showRate * usDollarInput;
      $("#usd").text(usDollarInput);
      $("#other-currency").text(rateTotal);
      $("#us-dollars").val("");
    };

  });
});


