const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')


router.post('/employeeregister' , function (req,res) {
   
  const form = new formidable.IncomingForm();

  form.parse(req, (err,fields, file) => {I
    console.log(fields)
    console.log(file)
})

    
    const user = new Employee({
        categoryOfAgent : req.body.categoryOfAgent,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        // uploadresume: {
        //   data: req.file.filename,
        //   contentType: 'image/png'
        // }
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