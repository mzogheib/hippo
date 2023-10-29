import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/profile", (_, res) => {
  res
    .status(200)
    .send({ name: "Hippo Fan", address: "123 Hippopotimus Boulevard" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
