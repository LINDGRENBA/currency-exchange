export class makeExchange {
  async getCurrencyExchangeRate(code) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if(response.ok && response.status === 200) {
        const setCode = await response.json()
        jsonifiedResponse = setCode + "." + conversion_rates + "." + code;
      } else {
        jsonifiedResponse = error;
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
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
