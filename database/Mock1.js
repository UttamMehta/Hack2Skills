const mongoose = require("mongoose");

const Mock1Schema = new mongoose.Schema({
  full_name: String,
  email: String,
  numbe: Number,
  cit: String,
  url: String,
});

const Mock1 = mongoose.model("Mock_data1", Mock1Schema); // collection - posts

module.exports = {
  Mock1,
};
