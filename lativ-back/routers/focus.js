const express = require('express');
const Router = express.Router();
const db = require('../db');

//查
Router.get('/',async(req,res,next)=>{
    let result = await db.Retrieve(req.query,"focus");
    res.send(result);
    next()
})



module.exports=Router;