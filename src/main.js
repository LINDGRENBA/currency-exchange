import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { getExchangeRate } from './currency-exchange-interface'

$(document).ready(function() {
  $("#exchange").click(function() {

    getExchangeRate();
    console.log(getExchangeRate);

  });
});