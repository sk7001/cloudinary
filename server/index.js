const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json({limit: '10mb'}))


app.listen(process.env.PORT,async ()=>{
    console.log(`Server is up on port ${process.env.PORT}.`);
})

app.use("/api", require("./uploadRoutes/Route"))