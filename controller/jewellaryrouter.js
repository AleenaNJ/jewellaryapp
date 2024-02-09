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

router.get("/viewall",async(req,res)=>{

    let data=await jewellarymodel.find()
    res.json(data)      

})



router.post("/search",async(req,res)=>{

    let input=req.body				
    let data=await jewellarymodel.find(input)
    res.json(data)
    })



module.exports=router