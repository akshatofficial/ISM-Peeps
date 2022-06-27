const OtpService = require("../../services/OtpService");
const HashService = require("../../services/HashService");
const UserService = require("../../services/UserService");
const TokenService = require("../../services/TokenService");
const UserDto = require("../../dtos/userDto");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone feild is required!" });
      return;
    }

    // if (String(phone).length != 10) {
    //   res.status(400).json({ message: "Phone number should be of length 10!" });
    //   return;
    // }

    const otp = await OtpService.generateOtp();

    const totalTimeLimit = 1000 * 60 * 3; // otp will be valid for only 3 minutes
    const expiresIn = Date.now() + totalTimeLimit;
    const dataToHash = `${phone}.${otp}.${expiresIn}`;
    const hash = HashService.hashOtp(dataToHash);

    try {
      // await OtpService.sendBySMS(phone, otp);
      res.json({
        hash: `${hash}.${expiresIn}`,
        phone,
        otp,
      });
      return;
    } catch (e) {
      const error = e.message || "Error in sending the otp to your phone.";
      res.status(500).json({ message: error });
    }
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      if (!otp) res.status(400).json({ message: "Otp feild is required!" });
      else if (!hash)
        res.status(400).json({ message: "Hash feild is required!" });
      else if (!phone)
        res.status(400).json({ message: "Phone feild is required!" });
      return;
    }

    const [hashedOtp, expiresIn] = hash.split(".");

    if (Date.now() > expiresIn) {
      res.status(400).json({ message: "Otp is expired!" });
      return;
    }

    const dataToHash = `${phone}.${otp}.${expiresIn}`;
    const isVerfied = OtpService.verifyOtp(hashedOtp, dataToHash);

    if (!isVerfied) {
      res.status(400).json({ message: "Incorerct Otp!" });
      return;
    }

    let user = null;
    try {
      user = await UserService.findUser({ phone });
      if (!user) {
        user = await UserService.createUser({ phone });
      }
    } catch (e) {
      const error = e.message || "Database Error!";
      res.status(500).json({ message: error });
    }

    // Token
    const { accessToken, refreshToken } = TokenService.generateTokens({
      _id: user._id,
      activated: false,
    });

    await TokenService.storeRefreshToken(user._id, refreshToken);
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      httpOnly: true
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      httpOnly: true
    });

    const userDto = new UserDto(user);
    res.json({ user: userDto, auth: true });
    // auth isliye bhej rahe hai kyuki pata chale client sde pe ki authenticate ho chuke hai 
  }
}

module.exports = new AuthController();
