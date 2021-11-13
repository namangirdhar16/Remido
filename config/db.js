const mongoose = require("mongoose");


mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.uhclt.mongodb.net/remido?retryWrites=true&w=majority`, 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully : ", db.host);
});

module.exports = db;