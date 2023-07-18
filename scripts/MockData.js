// const { faker } = require("@faker-js/faker");
const connectDatabase = require("../database/connectDatabase");

const { Mock2 } = require("../database/Mock2");
const { Mock1 } = require("../database/Mock1");
const data1 = require("../MOCK-DATA-1");
const data2 = require("../MOCK-DATA-2");

async function InsertJsonData() {
  try {
    await Mock1.insertMany(data1.Mock1);
    // await Mock2.insertMany(data2.Mock2);

    console.log("Added all posts");
  } catch (error) {
    console.log(error);
  }
}

connectDatabase().then(() => InsertJsonData());
