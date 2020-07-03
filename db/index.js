/* eslint-disable no-undef */
const mongoose = require('mongoose');

const mongoUrl =`mongodb://172.17.0.2:27017/petsfashion`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection.on("connected", (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Mongoose MongoDB connected!!')
  }
})

module.exports = mongoose;
