import mongoose from "mongoose";
const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/qaDB', {
            useNewURlparser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected sucessfully');

    } catch(error){
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
    
};
export default connectDB;