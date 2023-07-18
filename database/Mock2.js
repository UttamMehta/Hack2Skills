const mongoose = require("mongoose");

const Mock2Schema = new mongoose.Schema({
  full_name: String,
  email: String,
  team_name: String,
});

const Mock2 = mongoose.model("Mock_data2", Mock2Schema); // collection - posts

module.exports = {
  Mock2,
};
