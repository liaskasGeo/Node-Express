import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const submittedData = req.body;

  // Concatenate the text from both input fields
  const concatenatedText = `${submittedData.street}${submittedData.pet}`;

  // Send the concatenated text as a response
  res.send(`<h1>Your band's name : </h1> <br> <h3> ${concatenatedText} </h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
