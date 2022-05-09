const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')
const multer = require('multer');

var fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './resumes')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname)
  }
})

const upload = multer({ storage: fileStorageEngine })


router.post('/employeeregister' , upload.single('resume'), function (req,res) {
  
   console.log(req.file);

    const user = new Employee({
        categoryOfAgent : req.body.categoryOfAgent,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        position: req.body.position,
        salary: req.body.salary,
        resume: req.body.resume
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