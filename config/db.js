import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (connected) {
        console.error("Already connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.info("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;
