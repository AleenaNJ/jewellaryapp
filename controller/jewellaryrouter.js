const express=require("express")
const jewellarymodel=require("../model/jewellarymodel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let jewellary=new jewellarymodel(data)
    let result=await jewellary.save()
    res.json({
        status:"success"
    })
})




module.exports=router