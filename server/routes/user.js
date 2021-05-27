const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/User");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      //check the password

      user.comparePassword(password, (err, isMatch) => {
        if (err)
          return res.json({ loginSuccess: false, message: "found err", err });
        if (isMatch) {
          //비밀번호 까지 맞다면 토큰을 생성하기.
          // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지
        } else {
          return res.json({
            loginSuccess: false,
            message: "wrong password",
          });
        }
      });
    } else {
      return res.json({
        loginSuccess: false,
        message: "No user of the given email found in our database",
      });
    }
  });
});

router.post("/register", (req, res) => {
  const { Email, Name, Password } = req.body;

  User.findOne({ email: Email }).then((data) => {
    if (data) {
      return res.json({ duplicate: true });
    } else {
      const user = new User(req.body);
      (user.email = Email), (user.name = Name), (user.password = Password);

      user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
});

module.exports = router;
