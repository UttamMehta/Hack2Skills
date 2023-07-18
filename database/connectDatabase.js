const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connectDatabase() {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://UttamMehta:UttamMehta@practo.8y3l5l5.mongodb.net/?retryWrites=true&w=majority"
    );
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = connectDatabase;
