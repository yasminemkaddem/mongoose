const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("person", personSchema);