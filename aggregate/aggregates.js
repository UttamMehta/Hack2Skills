const { Mock1 } = require("../database/Mock1");
const { Mock2 } = require("../database/Mock2");
const { MongoClient } = require("mongodb");

async function commondata(req, res) {
  try {
    let r1 = await Mock1.find();
    let r2 = await Mock2.find();
    let arr = [];

    // console.log(r1[0] + " " + r2[0]);

    for (let i = 0; i < r1.length; i++) {
      for (let j = 0; j < r2.length; j++) {
        if (r1[i].email === r2[j].email) {
          let single = {};
          single = { ...r1[i] };
          let double = { ...r2[j] };
          let third = { ...single._doc, ...double._doc };
          arr.push(third);
        }
      }
    }
    console.log(arr[0]);

    return arr;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = {
  commondata,
};
