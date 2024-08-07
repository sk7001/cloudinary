const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const connect_db = require("./connectdb/connectDb")
const app = express()
app.use(cors())
app.use(express.json({limit: '10mb'}))


app.listen(process.env.PORT,async ()=>{
    await connect_db()    
    console.log(`Server is up on port ${process.env.PORT}.`);
})

app.use("/api", require("./uploadRoutes/Route"))