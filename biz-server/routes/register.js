const express = require("express");
const User = require("../models/User");
const Cart = require("../models/Cart");
const _ = require("lodash");
const joi = require("joi");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

const registerSchema = joi.object({
  name: joi.string().required().min(2),
  email: joi.string().required().min(6).email(),
  password: joi.string().required().min(8),
  isBiz: joi.boolean().required(),
});

router.post("/", async (req, res) => {
  try {
    //JOI VALIDATION
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    //CHECK FOR EXISITNG USER
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exist");

    //CREATE USER
    user = new User(req.body);

    //ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //ENCRYPT CART FOR USER
    let cart = new Cart({ userId: user._id, cards: [], active: true });
    await cart.save();

    //CREATE TOKEN
    const genToken = jwt.sign(
      { _id: user._id, isBiz: user.isBiz },
      process.env.jwtKey
    );
    await user.save();
    res.status(201).send({ token: genToken });
  } catch (error) {
    res.status(400).send("Error in post user");
  }
});

module.exports = router;
