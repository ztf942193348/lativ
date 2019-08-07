const express = require('express');
const Router = express.Router();
const db = require('../db');
//查
Router.get('/',async(req,res,next)=>{
    let result = await db.Retrieve(req.query,"cart");
    // console.log(req.query)
    res.send(result);
    next()
})

//更新
Router.post('/',async(req,res,next)=>{
    // console.log(req.body)
    let result = await db.Retrieve({username:req.body.username,id:req.body.id},"cart");
    // console.log(result)
    if(Object.keys(result).length===0){
        result = await db.Create(req.body,"cart")
    }else{
        result = await db.Update(req.body,"cart")
    }
    //这里的result是如果增加成功返回1
    // console.log(result)
    res.send(result)
    next();
})




module.exports=Router;
