import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  full_name: String,
  date_of_birth: Date,
  lat: Number,
  long: Number,
  age: String,
  gender: String,
  occupation: String,
  address: String,
  contact_information: String,
});

const Report = mongoose.model("Report", reportSchema);

export { Report };
