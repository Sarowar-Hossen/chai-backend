import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" });
import {app} from "./app.js"

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at Port: ${process.env.PORT}`)
  })
  app.on("error",(error)=>{
    console.log(error);
    throw error
  })
})
.catch(error=>console.log("MONGO db connection failed !!! ",error))















/*
import express from 'express'

const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error',(error)=>{
        console.error(error)
        throw error
    });
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
