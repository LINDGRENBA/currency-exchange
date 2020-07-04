// export class makeExchange {
//   async getCurrencyExchangeRate() {
//     try {
//       let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
//       let jsonifiedResponse;
//       if(response.ok && response.status === 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch(error) {
//       return false;
//     }
//   }
// }

// export function showError(error) {
//   let message = 'You received the following error: ' + error;
//   //DELETE BELOW
//   console.log(message);
//   return message;
// }

// export function showSuccess(successfulResponse) {
//   let message = successfulResponse; 
//   return message;
// }


// export async function getCurrencyExchangeRate() {
//   const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
//   if(!response.ok) {
//     return response; //write this function
//   } else {
//     let jsonifiedResponse = response.json()
//     return jsonifiedResponse;
//   }
// }

