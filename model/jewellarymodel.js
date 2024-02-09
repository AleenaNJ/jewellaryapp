const mongoose=require("mongoose");
const jewellarySchema=new mongoose.Schema({
    name:String,
    price:String,
    item:String,
    pay:String,
    
   


})

module.exports=mongoose.model("jewellary",jewellarySchema)