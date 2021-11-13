const express = require("express");
const Router = express();
Router.get("/", (req, res) => {
    res.send("hello");
})
Router.use("/user", require("./user"));

module.exports = Router;