const express = require('express');
const Router = express.Router();
const db = require('../db');

//增帐号和密码
Router.post('/',async(req,res,next)=>{
    let result = await db.Create(req.body,"user");
    //这里的result是如果增加成功返回1
    res.send(result)
    next();
})

//查帐号
Router.get('/',async(req,res)=>{
    console.log(req.query)
    let result = await db.Retrieve(req.query,"user")
    //下面那个Object.keys方法返回一个元素为输入对象的键的数组
    //0表示已有该帐号不可注册，1表示没有该帐号可以注册
    res.send(Object.keys(result).length?'0':'1');
})

module.exports=Router;


