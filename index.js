const express = require('express');
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
const userRoute = require('./route/user')
const clientRoute = require('./route/client')
const employeeRoute = require('./route/employee')
const cors = require('cors')


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

app.use(userRoute)
app.use(clientRoute);
app.use(employeeRoute);


app.listen(PORT, () => {
    console.log(`Server is Running on port`);
  });