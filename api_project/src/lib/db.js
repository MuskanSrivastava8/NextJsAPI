const { username, password } = process.env;
import mongoose from "mongoose";
export async function ConnectDB() {
  try {
    await mongoose.connect(process.env.connectionSrt);
    console.log("DB connected successfully.....")
  } catch (err) {
    console.error(err);
  }
    
}
