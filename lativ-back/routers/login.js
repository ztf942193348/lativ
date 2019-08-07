const express = require('express');
const Router = express.Router();
const db = require('../db');
const {
    createToken,
    decodeToken,
    checkToken
} = require('./token')
//查
Router.post('/',async(req,res)=>{
    //获取数据库中相应的帐号密码
    let result = await db.Retrieve(req.body,"user");
    //用Object.keys的方法（返回一个数组）去判断帐号密码是否正确，若正确返回1
    if(Object.keys(result).length==1){
        //创造一个token
        let token = createToken({username:result.username},300)
        //把token传回去
        res.send(token);
    }else{
        res.send('0')
    }
    //若result返回帐号和密码,代表客户端帐号密码正确

})

module.exports=Router;