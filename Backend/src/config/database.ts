import config from "./config.js";
import mongoose  from "mongoose";


const connectToDb = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("server is connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

export default connectToDb;