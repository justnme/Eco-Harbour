import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Change process.env.MONGO_URI to your MONGO_URL in string format 
        // it somewhy sometimes does not take parametr from .env so set it locally instead
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1)
    }
}

export default connectDB