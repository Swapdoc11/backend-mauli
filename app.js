import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import inforoute from './routes/info.js'
import mongoose from 'mongoose'
const app = express()
const port = 3000
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api',inforoute)

const connectDB= ()=>{
    try {
        mongoose.connect(process.env.MONGOURI)
        console.log("Connecting ...");
        
    } catch (error) {
        console.log(error);
        
    }
}

mongoose.connection.on('connected',()=>{
    console.log("Successfully Connected");
    
})
mongoose.connection.on('disconnected',()=>{
    console.log("Successfully Disconnected");
    
})
process.on('SIGINT',async()=>{
    await mongoose.connection.close()
    process.exit(0)
})

app.listen(port,()=>{
    connectDB()
    console.log(`Listening at ${port}`);
    
})
