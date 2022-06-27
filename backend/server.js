require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const DbConnect = require("./database");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json()); // for json data
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.listen(PORT, () => {
  // This callback will run when server starts
  console.log(`Server started. Listening on port ${PORT}.`);
});
