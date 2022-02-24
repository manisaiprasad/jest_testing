import express from "express";

const app = express();

export const hello = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

app.get("/", hello);

export default app;
