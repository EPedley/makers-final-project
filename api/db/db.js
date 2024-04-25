const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const mongoDbUrl = "mongodb://0.0.0.0/Terra"
  if (!mongoDbUrl) {
    console.error(
      "No MongoDB url provided. Make sure there is a MONGODB_URL environment variable set. See the README for more details."
    );
    throw new Error("No connection string provided");
  }

  await mongoose.connect(mongoDbUrl);

  if (process.env.NODE_ENV !== "test") {
    console.log("Successfully connected to MongoDB");
  }
};

module.exports = { connectToDatabase };

