import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { callAPI } from './currency-exchange-interface';

//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {

    const usDollarInput = $("#us-dollars").val();
    alert(usDollarInput);
    const convertToInput = $("#currency-code").val();
    alert(convertToInput);

    // let currencyCodes = ['EUR', 'TRY', 'KRW', 'RUB', 'MXN', 'JPY']; //do loop, if convertToInput = currencyCodes[i], then add currencyCodes[i] to result.conversion_rates.{i goes here} to get the specific value, then multiply it by the user's input for us dollars

    callAPI();

  });
});


