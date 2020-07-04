import { showError } from './currency-exchange.js';
import { provideExchangeRate } from './currency-exchange.js';

export async function callAPI() {
  const responseFromAPI = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
  if(!responseFromAPI.ok) {
    showError(responseFromAPI.statusText); //write showError function
  } else {
    const responseJsonified = await responseFromAPI.json();
    provideExchangeRate(responseJsonified); //write provideExchangeRate function
  }
}
