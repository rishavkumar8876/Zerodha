const User = require("../models/User.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// ----------------------------
// 1. VERIFY USER (For frontend)
// ----------------------------
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);

      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false });
      }
    }
  });
};

// -----------------------------------
// 2. REQUIRE AUTH (Protect backend)
// -----------------------------------
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "Not authenticated" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid token" });
    }

    req.userId = decoded.id;
    next();
  });
};
