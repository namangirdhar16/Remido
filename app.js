const express = require("express");
const app = express();

const PORT = 3000;
app.use("/", require("./routes/index"));

require("dotenv").config({ path: "./config.env"});
const db = require("./config/db.js");
const passportOauthGoogle = require("./config/passport-oauth-google"); 

app.listen(PORT, () => {
     console.log(`server is up and running on port: ${PORT}`);
})
