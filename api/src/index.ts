import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "../routes/Routes";

const app = express();

var corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({
    respnose: "express typescript api",
  });
});

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} is running on port ${process.env.APP_PORT}`
  );
});
