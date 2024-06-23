import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Change process.env.MONGO_URI to your MONGO_URL in string format 
        // it somewhy sometimes does not take parametr from .env so set it locally instead
        const conn = await mongoose.connect("mongodb+srv://admin:admin@cluster0.jngpbvn.mongodb.net/EcoHarbour?retryWrites=true&w=majority");
        console.log(`MONGODB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1)
    }
}

export default connectDB