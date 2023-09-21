const express = require("express");
const moment = require("moment");
const path = require("path");
const { connectToDatabase } = require("./lib/dbConnect");
const hngtaskHandler = require("./api/hngtask");
const { signupUser } = require("./controller/signupController");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use("/api/hngtask", hngtaskHandler);

app.post("/api/signup", signupUser);



connectToDatabase()
  .then(() => {
    // MongoDB is connected; start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
