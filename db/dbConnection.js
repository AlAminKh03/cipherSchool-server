const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = db = async () => {
  try {
    await mongoose.connect(process.env.DB_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(`Mongodb error : ${error}`);
  }
};
