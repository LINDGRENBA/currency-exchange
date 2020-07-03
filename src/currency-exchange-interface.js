import $ from "jquery";


export async function getExchangeRate() {
  let response = await fetch(`https://v6.exchangerate-api.com/v6/eb383d1fe61093025c7a32ee/latest/USD`);
  let rate;
  if(response.ok && response.status === 200) {
    rate = await response.json();
  } else {
    rate = false;
  }
  return rate;
}
