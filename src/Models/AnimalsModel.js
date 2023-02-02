const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AnimalsSchema = new Schema({
  id: ObjectId,
  name: String,
  raca: String,
  age: Number,
});

const AnimalsModel = mongoose.model("animals", AnimalsSchema);

module.exports = AnimalsModel;
