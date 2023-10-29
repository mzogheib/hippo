import express from "express";

const app = express();

const port = process.env.PORT || 4002;

app.get("/profile", (_, res) => {
  res
    .status(200)
    .send({ name: "Hippo Fan", address: "123 Hippopotimus Boulevard" });
});

app.listen(port, () => {
  console.log(`Profile API listening at http://localhost:${port}`);
});
