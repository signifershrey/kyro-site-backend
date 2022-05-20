const express = require('express');
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
const userRoute = require('./route/user')
const clientRoute = require('./route/client')
const employeeRoute = require('./route/employee')
const contactRoute = require('./route/contactus')
const resumeRoute = require('./route/resumes')
const cors = require('cors')
// const multer = require('multer');


app.use(cors({
  origin:"*"
}))
dotenv.config()

const PORT = process.env.PORT || 5000;


try {
  mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
} catch (error) {
  handleError(error);
    console.log(error);
}
process.on('unhandledRejection', error => {
console.log('unhandledRejection', error.message);
});


//For pasrsing JSON Data
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.get("/", (req, res) => {
    res.send("Hello World!");
})

// 

// var fileStorageEngine = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './resumes')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "--" + file.originalname)
//   }
// })

// const upload = multer({ storage: fileStorageEngine })



// app.post('/resumeupload',upload.single('resume') ,(req,res) => {
//   res.send("File Upload")
// })

app.use(express.static('public'));
app.use(userRoute)
app.use(clientRoute);
app.use(employeeRoute);
app.use(contactRoute);
app.use(resumeRoute);


app.listen(PORT, () => {
    console.log(`Server is Running on port`);
  });