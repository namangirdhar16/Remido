const express = require("express");
const app = express();


const PORT = 3000;
app.use("/", require("./routes/index"));
require("dotenv").config({ path: "./config.env"});
const db = require("./config/db.js");
// app.get("/", (req, res) => {
//      res.send("Hello!!");
// })

app.listen(PORT, () => {
     console.log(`server is up and running on port: ${PORT}`);
})
