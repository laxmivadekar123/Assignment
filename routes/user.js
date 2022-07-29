const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.post("/createuser",async(req,res)=>{
    const { userName,emailID,gender,phoneNumber,dob,address} = req.body;
    console.log(req.body.userName,req.body.emailID,req.body.gender,req.body.phoneNumber)
    try{
        const user = new User({
            userName,
            emailID,
            gender,
            phoneNumber,
            dob,
            address
        })

        console.log(user)
        await user.save();
        // if(user){
        //     res.status(200).json({status:"success","data":user,"message":"user created successfully"})
        //     // console.log("user created successfully...");
        //     console.log(user.save())
        //     console.log("user created successfully...");
        // }else{
        //     res.status(422).send("user data is empty")
        //     console.log("user not created");
        // }
    }catch(err){
        res.json({status:false,"err":err.message})
        console.error(err.message);
    }
})

router.get("/getUserByID/:id",async(req,res)=>{
    const id = req.params;
    try{
        const user = await User.findOne({id: id})
        if(user){
            res.status(200).json({status:"success","data":user,"message":"user data fetched successfully"})
            console.log("data fetched successfully...");
        }else{
            res.status(422).send("user not found with that id")
            console.log("user not found with that id");
        }
    }catch(err){
        res.json({status:false,"err":err.message})
        console.error(err.message);
    }
})


router.get("/getAllUsers",async(req,res)=>{
    try{
        const user = await User.find()
        if(user){
            res.status(200).json({status:"success","data":user,"message":"get all the users successfully"})
            console.log("getAll the data fetched successfully...");
        }else{
            res.status(422).send("data not found")
            console.log("data not found");
        }
    }catch(err){
        res.json({status:false,"err":err.message})
        console.error(err.message);
    }
})

router.put("/updateUserByID/:id",async(req,res)=>{
    const userid = req.params;
    try{
        const { userName,emailID,gender,phoneNumber,dob,address} = req.body;
        const user = await User.findOneAndUpdate({id:userid},{
            userName,
            emailID,
            gender,
            phoneNumber,
            dob,
            address
        })
        if(user){
            res.status(200).json({status:"success","data":user,"message":"user updated successfully"})
            console.log("user updated successfully");
        }else{
            res.status(422).send("data not found")
            console.log("data not found");
        }
    }catch(err){
        res.json({status:false,"err":err.message})
        console.error(err.message);
    }
})

router.delete("/deleteByID/:id",async(req,res)=>{
    const id = req.params;
    try{
        const user = await User.findOneAndDelete({id: id})
        if(user){
            res.status(200).json({status:"success","data":user,"message":"user deleted successfully"})
            console.log("data fetched successfully...");
        }else{
            res.status(422).send("user not found with that id")
            console.log("user not found with that id");
        }
    }catch(err){
        res.json({status:false,"err":err.message})
        console.error(err.message);
    }
})

module.exports = router;