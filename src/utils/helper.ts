 function luhnLikeValidate(cardStr: string): { valid: boolean; reason?: string } {
    const digitsOnly = cardStr.replace(/\D/g, "");
    if (digitsOnly.length !== 16) {
      return { valid: false, reason: "شماره کارت باید ۱۶ رقم باشد" };
    }
    let sum = 0;
    for (let i = 0; i < 16; i++) {
      let digit = parseInt(digitsOnly[digitsOnly.length - 1 - i]);
  
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    const isValid = sum % 10 === 0;
    return { 
      valid: isValid, 
      reason: isValid ? undefined : "شماره کارت معتبر نیست." 
    };
  }
  function formatCard(number: string): string {
    const s = number.replace(/\D/g, "");
    return s.replace(/(.{4})/g, "$1 ").trim();
}

export {
    formatCard,
    luhnLikeValidate
}  
