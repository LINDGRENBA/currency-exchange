// import { showError } from './currency-exchange.js';
// import { provideExchangeRate } from './currency-exchange.js';


export class makeExchange {
  async getCurrencyExchangeRate() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if(response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}


// export async function callAPI() {
//   const responseFromAPI = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
//   if(!responseFromAPI.ok) {
//     return showError(responseFromAPI.statusText); //write showError function
//   } else {
//     const responseJsonified = await responseFromAPI.json();
//     return provideExchangeRate(responseJsonified); //write provideExchangeRate function
//   }
// }
