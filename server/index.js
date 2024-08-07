const express = require("express")
const cors = require("cors")

const app = express()
const port = 1000
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post("/upload",(req,res)=>{
    console.log(req)
    res.status(200).json({message:"Image recieved successfully"})
})