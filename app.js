const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const jewellaryrouter=require("./controller/jewellaryrouter")

const app=express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aleena2681:alee@cluster0.okresfv.mongodb.net/jewellaryDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/jewellary",jewellaryrouter)

app.listen(3001,()=>{
    console.log("server running")
})