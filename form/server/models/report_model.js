const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  full_name: String,
  date_of_birth: Date, 
  lat: Number ,
  long:Number,
  age: String,
  gender: String,
  occupation: String ,
  address:String,
  contact_information: String,
});

module.exports = mongoose.model('Report', ReportSchema);
