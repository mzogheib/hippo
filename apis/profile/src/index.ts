import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/profile", (_, res) => {
  res.send("Here is your profile");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
