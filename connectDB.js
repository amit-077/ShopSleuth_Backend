const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });

    console.log("Database connected successfully");
  } catch (e) {
    console.log("Error while connecting to mongoDB");
    console.log(e);
  }
};

module.exports = { connectDB };
