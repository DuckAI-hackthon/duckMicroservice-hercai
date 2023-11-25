const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const hercaiRoutes = require("./app/hercai/hercai");

app.use(express.json());
app.use("/hercai", hercaiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
