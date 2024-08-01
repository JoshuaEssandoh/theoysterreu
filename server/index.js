const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const port = 8083;
const path = require("path");
require("dotenv").config();
const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");
const src = path.join(__dirname, "../frontend/src/");
//used for google storage transfer
app.use(express.static(src));

mongoose.connect(process.env.MONGO_URI);

app.use("/", require("./routes/oysRoute"))
//--------------------------------------------------------------------------------


const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

let projectId = "molten-album-427115-q6"; // Get this from Google Cloud
let keyFilename = "mykey.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("test_bucket_abc123"); // Get this from Google Cloud -> Storage

// Gets all files in the defined bucket
app.get("/upload", async (req, res) => {
  try {
    const [files] = await bucket.getFiles();
    res.send([files]);
    console.log("Success");
  } catch (error) {
    res.send("Error:" + error);
  }
});
// Streams file upload to Google Storage
app.post("/upload", multer.single("imgfile"), (req, res) => {
  console.log("Made it /upload");
  try {
    if (req.file) {
      console.log("File found, trying to upload...");
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();
      
      blobStream.on("finish", () => {
        res.status(200).send("Success");
        console.log("Success");
      });
      blobStream.end(req.file.buffer);
    } else throw "error with img";
  } catch (error) {
    res.status(500).send(error);
  }
});
// Get the main index html file
app.get("/", (req, res) => {
  res.sendFile(src + "App.js");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*",(req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  } )
}

// Start the server on port 8080 or as defined
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});