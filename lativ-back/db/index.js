const MongoClient = require('mongodb').MongoClient;
const {mongo,database} = require('../config.json');

function connect(colName){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(mongo,{ useNewUrlParser: true },(err,client)=>{
            if(err) throw err;
            let collection =  client.db(database).collection(colName);
            //把client也传出去是因为执行完增删改查之后要关闭数据库连接，避免资源占用
            let a = {collection,client}
            resolve(a);
        })
    })
}

//增
exports.Create=async(params,colName)=>{
    let {collection:db,client} = await connect(colName);
    return new Promise((resolve,reject)=>{
        db.insertOne(params,(err,result)=>{
            if(err) throw err;
            console.log('数据添加成功')
            client.close();
            //用1表示数据添加成功
            resolve('1')
        })
    })
}

//查
exports.Retrieve= async(params,colName)=>{
    let {collection:db,client} = await connect(colName);
    return new Promise((resolve,reject)=>{
        // console.log(params)
        db.find(params).toArray(function(err, docs) {
            if(err) throw err;
            console.log("Found the following records");
            // console.log(111)
            // console.log(docs)
            client.close();
            resolve(docs)
        });
    })
}

//删
exports.Delete=async(params,colName)=>{
    let {collection:db,client} = await connect(colName);
    var ObjectId = require('mongodb').ObjectId;
    // console.log(params.id)
    return new Promise((resolve,reject)=>{
        db.deleteOne({"username":params.username,"id":params.id},(err,docs)=>{
            if(err) throw err;
            console.log("Removed the document");
            // console.log(docs)
            client.close();
            resolve(docs)
        })
    })
}

//改
exports.Update=async(params,colName)=>{
    let {collection:db,client} = await connect(colName);
    return new Promise((resolve,reject)=>{
        console.log(params)
        let updateStr = {$set:{num:params.num}}
        db.updateOne({"username":params.username,"id":params.id},updateStr,(err,docs)=>{
            if(err) throw err;
            console.log("数据更新成功");
            // console.log(docs)
            client.close();
            resolve(docs)
        })
    })
}