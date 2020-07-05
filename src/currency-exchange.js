export function checkValidCode(code) {
  let validCodes = ["EUR", "TRY", "KRW", "RUB", "MXN", "JPY"];
  for(let i = 0; i < validCodes.length; i++) {
    if(validCodes.includes(code)) {
      return true;
    } else {
      return false;
    }
  }
}