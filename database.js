const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_CONNECTION_URL,{useNewUrlParser:true})
.then(()=>{"Database succesfully connected"})
.catch((err)=>{console.log(err)})
module.exports = mongoose