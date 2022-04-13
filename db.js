const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://namnguyen20999:Tao0biet99@rescueagriciltureproduc.vs7uw.mongodb.net/ProductDB";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
