require('dotenv').config()
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/api')
const connection = require('./database')
const cors = require('./middleware/cors')


app.use(express.json())
app.use(express.static("static"))
app.use("/", cors ,routes)
app.all("*", (req,res,next)=>{
    res.status(404).json({
        success:false,
        message: `Cant find ${req.originalUrl}`
    })
}
)
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})
