const express = require('express');
const Router = express.Router();
const sales = require('./sales')
const categoryindex = require('./categoryindex')
const focus = require('./focus')
const regist = require('./regist')
const login = require('./login')
const detail = require('./detail')
const gouwuche = require('./gouwuche')
//设置允许跨域
Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

Router.use('/',express.json(),express.urlencoded({extended:false}))




Router.use('/list',sales);
Router.use('/categoryindex',categoryindex)
Router.use('/focus',focus);
Router.use('/regist',regist);
Router.use('/login',login)
Router.use('/detail',detail)
Router.use('/gouwuche',gouwuche)


module.exports=Router;