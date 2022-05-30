const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CameraSchema = new Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true},
    color: { type: String, required: false},
    megapixels: { type: Number, required: true},
    lens: { type: String, required: true}

  },
  { timestamps: true }
);

const Camera = mongoose.model("cameras", CameraSchema);

module.exports = Camera;
