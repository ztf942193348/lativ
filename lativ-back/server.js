const express = require('express');
const app = express();
const {PORT} = require('./config.json');
const routers = require('./routers');

app.use(express.static('./'));

app.use(routers);

app.listen(PORT,()=>{
    console.log(PORT+'服务开启成功')
})