const express = require('express');
const router = express.Router();
const Client = require('../models/client')


router.post('/clientregister' , function (req,res) {

  
    const user = new Client({
        categoryOfAgent : req.body.categoryOfAgent,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        projectDetails: req.body.projectDetails,
        deadline: req.body.deadline,
        estimatedBudget: req.body.estimatedBudget,
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
              message: "Client Registered to database!!"
        })      
    })
})

module.exports = router;