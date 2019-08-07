const express = require('express');
const Router = express.Router();
const db = require('../db');

//查
Router.get('/',async(req,res,next)=>{
    // console.log(req.query)
    let result = await db.Delete(req.query,"cart");
    res.send(result);
    next()
})

//改
Router.post('/',async(req,res,next)=>{
    // console.log(req.body)
    // console.log(result)
    let result = await db.Update(req.body,"cart")
    //这里的result是如果增加成功返回1
    // console.log(result)
    res.send(result)
    next();
})


module.exports=Router;