const express = require("express");
const path = require("path");
const fs = require("fs");
const { readFile } = require("fs/promises");
const cors = require("cors");
const sausagesFilePath = path.join(`${__dirname}/data.json`);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/sausages", async (req, res) => {
  const fileData = await fileReaderAsync(sausagesFilePath);
  const data = JSON.parse(fileData);
  res.json(data);
});

app.post("/sausages", (req, res) => {
  fs.readFile(sausagesFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error reading file" });
    }

    const sausages = JSON.parse(data);

    sausages.push(req.body);

    fs.writeFile(sausagesFilePath, JSON.stringify(sausages), "utf-8", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error writing file" });
      }

      res.json({ message: "Data added successfully" });
    });
  });
});

const fileReaderAsync = async (filePath) => {
  try {
    return await readFile(filePath);
  } catch (error) {
    console.error(`File reading error: ${error.message}`);
  }
};

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
