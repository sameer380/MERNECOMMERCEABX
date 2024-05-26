import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
			"mongodb+srv://syedahamad1976:6JcQXrz97XIjpPxT@ecommerce.s0c1o8h.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce"
    ).then(() => { console.log("connected") }
    
    );
    // console.log(
    //   `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    // );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
