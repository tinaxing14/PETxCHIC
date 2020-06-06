const mongoose = require('mongoose');

const mongoUrl =`mongodb://localhost/petsfashion`;

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
