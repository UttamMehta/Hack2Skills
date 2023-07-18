const { faker } = require("@faker-js/faker");
const connectDatabase = require("../database/connectDatabase");

const { Mock2 } = require("../database/Mock2");
const { Mock1 } = require("../database/Mock1");
const data1 = require("../MOCK-DATA-1.JSON");
const data2 = require("../MOCK-DATA-2.JSON");

console.log(data1);

// async function InsertJsonData() {
//     await Mock1.insertMany();
//     await Mock2.insertMany()

//     console.log('Added all posts')

// }

// connectDatabase().then(()=>InsertJsonData())
