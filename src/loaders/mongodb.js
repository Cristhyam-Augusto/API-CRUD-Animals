const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://CrisAugusto:@cluster0.zqw2vbl.mongodb.net/test"
  );
}

module.exports = startDB;
