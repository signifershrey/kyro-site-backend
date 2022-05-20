const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  resume: {
    // data: Buffer,
    // contentType: String,
    type : String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("resume", resumeSchema);
