import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        const cnt = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected : ", cnt.connection.host);
        
    } catch (error) {
        console.log("Error connecting to Mongodb:"  ,error);
        process.exit(1); //1 status code means fail 0 means success
    }
}

export default connectDB;