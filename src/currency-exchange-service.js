export class ExchangeService {
  async getExchangeRate() {
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
      console.log(error);
      return false;
      //even in teh promise's resolve, reject statement, we console log the error, but only return false to the user 
    }
  }
}