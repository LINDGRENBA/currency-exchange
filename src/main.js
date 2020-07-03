import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { getExchangeRate } from './currency-exchange-interface';




$(document).ready(function() {
  $("#exchange").click(function() {

    let response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/USD`)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
    .then(function(returnedMessage) {
      processRequest(returnedMessage);
    });

  });
});