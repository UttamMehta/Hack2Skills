const mongoose = require("mongoose");

async function connectDatabase() {
  const result = await mongoose.connect(
    "mongodb+srv://UttamMehta:UttamMehta@practo.8y3l5l5.mongodb.net/?retryWrites=true&w=majority"
  );

  return result;
}

module.exports = connectDatabase;
