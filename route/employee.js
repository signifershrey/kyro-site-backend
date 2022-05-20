const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')

router.post('/employeeregister' , function (req,res) {
  
   console.log(req.file);

    const user = new Employee({
        categoryOfAgent : req.body.categoryOfAgent,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        position: req.body.position,
        salary: req.body.salary,
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
              message: "Employee Registered to database!!"
        })      
    })
})

module.exports = router;