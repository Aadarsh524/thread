import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("Missing MongoDB URL");
    return; // Return explicitly if MongoDB URL is missing
  }

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    isConnected = true;
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
};
