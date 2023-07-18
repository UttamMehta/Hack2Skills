

const { commondata } = require ("./aggregate/aggregates");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const connectDatabase = require("./database/connectDatabase");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/hello", (req, res, next) => {
  res.send("Hello there");
  next();
});

// app.get("/", (req, res) => {
//   res.send("Hello you can get the both the mock data  with /show");
// });

app.get("/show", async (req, res) => {
  let arr = await commondata();
  res.send({ data: arr });
});

app.use("/", express.static("static"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

const port = process.argv[2] || 3035;

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(
      `Server listening to http requests on http://localhost:${port}`
    );
  });
});
