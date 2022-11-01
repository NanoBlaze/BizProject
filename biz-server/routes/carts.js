const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");
const joi = require("joi");
const router = express.Router();

const cardsSchema = joi.object({
  name: joi.string().required().min(2),
  phone: joi.number().required().min(0),
  address: joi.string().required().min(2),
  description: joi.string().required().min(2),
  image: joi.string().required().min(2),
  quantity: joi.number().required(),
});

router.get("/", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");
    res.status(200).send(cart.cards);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    // joi validation for body
    const { error } = cardsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    // find user cart
    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");

    // add card to cards array in cart
    cart.cards.push(req.body);
    await cart.save();
    res.status(200).send(cart.cards);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
