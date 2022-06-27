const jwt = require("jsonwebtoken");
const refreshModel = require("../models/RefreshModel");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "1y",
    });

    return { accessToken, refreshToken };
  }

  async storeRefreshToken(userId, token) {
    try {
      await refreshModel.create({
        token,
        userId,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TokenService();
