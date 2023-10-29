import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 4002;

app.use(cors({ origin: "*" }));

app.get("/profile", (_, res) => {
  res
    .status(200)
    .send({ name: "Hippo Fan", address: "123 Hippopotimus Boulevard" });
});

app.listen(port, () => {
  console.log(`Profile API listening at http://localhost:${port}`);
});
