const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: false },
    year: { type: Number, required: true},
    cameras: [
      { type: Schema.Types.ObjectId, ref: "cameras", required: false },
    ],
  },
  { timestamps: true }
);

const Company = mongoose.model("companys", CompanySchema);

module.exports = Company;
