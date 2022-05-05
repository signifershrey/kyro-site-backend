const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    trim:true,
    required:[true , "email field is not provided. Cannot proceed without email "],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  contact: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(v)
      },
      message: '{VALUE} is not a valid 10 digit number!'
    },
    required: true
  },
  textareaExperience: {
    type: String,
  },
  categoryOfAgent: {
    type: String,

  },
  confirmedLeads: {
    type: String,
  },
  teaxtareaReason: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
