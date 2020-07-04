export function showError(error) {
  console.log(error);
}

export function provideExchangeRate(successfulResponse) {
  let message = successfulResponse.conversion_rates.USD; 
  alert(message);
}

