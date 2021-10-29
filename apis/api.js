const exp = require('express')
const userApi = exp.Router();
userApi.use(exp.json())
module.exports =userApi;
const expressErrorHandler = require('express-async-handler');
userApi.post('/postblog', expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("myblogObj")
    let topic=req.body.name;
    let user = await userCollectionObj.findOne({ name: topic})
    if(user==null) {
        await userCollectionObj.insertOne({name:topic,subtopics:[]});
        res.send({message:"topic created successfully"})
    }
    else{
        res.send({message:"topic already exists"})
    }


}))
userApi.get('/topics',expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("myblogObj")
    let topics = await userCollectionObj.find().toArray();
    res.send({message:topics})
}))
userApi.post('/subtopics',expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("myblogObj")
    let topic=req.body.name;
    let user = await userCollectionObj.findOne({ name: topic})
    res.send({message:user.subtopics})


}))
userApi.post('/subtopics',expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("myblogObj")
    let topic=req.body.name;
    let user = await userCollectionObj.findOne({ name: topic})
    res.send({message:user.subtopics})


}))
userApi.post('/subt',expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("myblogObj")
    let userCollectionObj2=req.app.get("myblogObj2")
    let topic=req.body.name;
    let subt=req.body.subt
    let user = await userCollectionObj.findOne({ name: topic})
    user.subtopics.push(subt)
    await userCollectionObj2.insertOne({ name: subt,text:""})
    let result=await userCollectionObj.updateOne({name:topic},{$set:{...user}})
    res.send({message:"successfully updated"})

}))
userApi.post('/text',expressErrorHandler(async (req, res)=>{
    let userCollectionObj2 = req.app.get("myblogObj2");
    let topic= req.body.name
    let user= await userCollectionObj2.findOne({ name: topic})
    res.send({message:user.text})
}))
userApi.post('/puttext',expressErrorHandler(async (req, res)=>{
    let userCollectionObj2 = req.app.get("myblogObj2");
    let topic= req.body.name
    let texts=req.body.text
    let user={name:topic,text:texts}
    let result=await userCollectionObj2.updateOne({name:topic},{$set:{...user}})
    res.send({message:user.text})
}))