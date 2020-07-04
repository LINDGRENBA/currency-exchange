import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

//User Interface Logic
$(document).ready(function() {
  $("#exchange").click(function() {
    alert('the button works');

    let request = new XMLHttpRequest();
    let euro = 'EUR';
    let turkishLira = 'TRY';
    let southKoreanWon = 'KRW';
    let russianRuble = 'RUB';
    let mexicanPeso = 'MXN';
    let japaneseYen = 'JPY';
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        const result = JSON.parse(this.response);
        showResult(result);
      }
    };

    request.open("GET", url, true);
    request.send();

    const showResult = function(result) {
      let message = result.conversion_rates.USD; 
      alert(message);
    };


  });
});

//BL
// function showError(errorMessage) {
//   console.log(`Something went wrong. You got the following error: ${errorMessage}`);
// }

// function provideExchangeRate(successfulResponse) {
//   alert(successfulResponse.conversion_rates.USD);
// }

//UIL
// async function callAPI() {
//   const responseFromAPI = await fetch();
//   if(!responseFromAPI.ok) {
//     showError(responseFromAPI.statusText); //write showError function
//   } else {
//     const responseJsonified = await responseFromAPI.json();
//     provideExchangeRate(responseJsonified); //write provideExchangeRate function
//   }
// }
// callAPI();