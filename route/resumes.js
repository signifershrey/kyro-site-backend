const express = require('express');
const router = express.Router();
const Resume = require('../models/resumes')

router.post('/resumeupload' , function (req,res) {
  
   console.log(req.file);

    const user = new Resume({
        resume : req.body.resume,
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
              message: "Resume Uploaded to database!!"
        })      
    })
})

module.exports = router;