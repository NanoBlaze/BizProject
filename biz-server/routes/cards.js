const express = require("express");
const auth = require("../middleware/auth");
const Card = require("../models/Card");
const joi = require("joi");
const router = express.Router();

const cardsSchema = joi.object({
  name: joi.string().required().min(2),
  phone: joi.number().required().min(0),
  address: joi.string().required().min(2),
  description: joi.string().required().min(2),
  image: joi.string().required().min(2),
});

router.delete("/:id", auth, async (req, res) => {
  try {
    // check if the user business
    if (!req.payload.isBiz)
      return res.status(400).send("Only business can delete cards");

    let card = await Card.findByIdAndRemove({ _id: req.params.id });
    if (!card) return res.status(404).send("No such card");
    res.status(200).send("card was deleted!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    // check if the user business
    if (!req.payload.isBiz)
      return res.status(400).send("Only business can add cards");

    // joi validation
    const { error } = cardsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    // edit card to db
    let card = await Card.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!card) return res.status(404).send("No such card");

    // send the updated card details
    res.status(201).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    let card = await Card.findOne({ _id: req.params.id });
    if (!card) return res.status(404).send("No such card");
    res.status(200).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    let cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    // check if the user business
    if (!req.payload.isBiz)
      return res.status(400).send("Only business can add cards");

    // joi validation
    const { error } = cardsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    // add card to db
    let card = new Card(req.body);
    await card.save();

    // send new card details
    res.status(201).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
