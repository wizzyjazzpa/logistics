import mongoose from "mongoose";

export const connectDB = async():Promise<void>=>{
    try {
          const conn =  await mongoose.connect("mongodb+srv://walisonmichael8_db_user:1oDXu2GUZGygsJcl@cluster0.ydf3i3m.mongodb.net/db_logistics");
             console.log("✅ MongoDB Connected To: "+conn.connection.host);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
      process.exit(1);
    }
};