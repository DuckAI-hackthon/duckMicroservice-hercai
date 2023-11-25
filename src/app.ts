import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

import hercaiRoutes from "./service/hercai"; 

app.use(express.json());
app.use("/hercai", hercaiRoutes);

app.get("/", (req: any, res: any) => {
  res.send("Hercai!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
