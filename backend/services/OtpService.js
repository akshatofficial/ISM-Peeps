const crpto = require("crypto");
const SMS_ID = process.env.SMS_SECRET;
const SMS_AUTH_TOKEN = process.env.SMS_AUTH_TOKEN;
const twilio = require("twilio")(SMS_ID, SMS_AUTH_TOKEN, {
  lazyLoading: true,
});
const HashService = require('./HashService');

class OtpServices {
  async generateOtp() {
    const otp = crpto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySMS(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: process.env.SMS_FROM_NUMBER,
      body: `Your ISM-PEEPS otp is ${otp}`,
    });
  }

  verifyOtp(hashedOtp, dataToHash) {
    return HashService.hashOtp(dataToHash) === hashedOtp;
  }
}

module.exports = new OtpServices();
