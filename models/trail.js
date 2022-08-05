const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const TrailSchema = new Schema({
  name: {
    type: String,
    required: [true, "The Name text field is required"],
  },
  date: {
    type: Date,
    required: [true, "The Date field is required"],
  },
});

// Create model for todo
const Trail = mongoose.model("trail", TrailSchema);

module.exports = Trail;
