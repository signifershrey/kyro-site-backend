const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/affiliatesubmit' , function (req,res) {

   
    const user = new User({

        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        textareaExperience: req.body.textareaExperience,
        categoryOfAgent: req.body.categoryOfAgent,
        confirmedLeads: req.body.confirmedLeads,
        teaxtareaReason: req.body.teaxtareaReason,
    })
    

    user.save((err,user) => {
        if (err) {
            res.status(500)
              .send({
                message: err
              });
            return;
          } else res.status(200)
            .send({
              message: "User Affiliate Data Inserted to the database!!"
        })
     
    })
})

module.exports = router;