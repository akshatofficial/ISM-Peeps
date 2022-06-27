const crypto = require("crypto");

class HashService {
  hashOtp(data) {
    const generatedHash = crypto
      .createHmac("sha256", process.env.HASH_SECRET)
      .update(data)
      .digest("hex");
    return generatedHash;
  }
}

module.exports = new HashService();
