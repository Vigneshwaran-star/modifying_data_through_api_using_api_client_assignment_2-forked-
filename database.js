const mongoose = require('mongoose');
require('dotenv').config();
const connectedDb= ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("MongoDb Connected Successfully"); 
    }).catch((error)=>{
       console.log(error)
    })
}
module.exports=connectedDb;