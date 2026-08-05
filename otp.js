function generateSimpleOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
     
      otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
  }
  
  const myOTP = generateSimpleOTP(6);
  console.log("Your Simple OTP is:", myOTP);