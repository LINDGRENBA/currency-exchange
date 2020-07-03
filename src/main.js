import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { getExchangeRate } from './currency-exchange-interface';


//Business Logic
function showError(errorMessage) {
  console.log(`Something went wrong. You got the following error: ${errorMessage}`);
}

function provideExchangeRate(successfulResponse) {
  console.log(successfulResponse);
}




//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {


    async function callAPI() {
      const responseFromAPI = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/USD`);
      if(!responseFromAPI.ok) {
        showError(responseFromAPI.statusText); //write showError function
      } else {
        const responseJsonified = await responseFromAPI.json();
        provideExchangeRate(responseJsonified); //write provideExchangeRate function
      }
      callAPI();
    };

  });
});