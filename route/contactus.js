const express = require("express");
const router = express.Router();
const Contactus = require("../models/contactus");

router.post("/contactus", function (req, res) {
  const user = new Contactus({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    } else
      res.status(200).send({
        message: "Contact Query Registered to database!!",
      });
  });
});

module.exports = router;
