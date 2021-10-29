const exp = require("express")
const app = exp();
const userApi = require('./apis/api')
const port = process.env.PORT || 8080
const path = require("path")
const mc = require("mongodb").MongoClient;
app.listen(port, () => console.log(`server on ${port}...`))
app.use(exp.static(path.join(__dirname, './dist/myblog/')))
const url="mongodb+srv://nikhil1:abdrpkljb@cluster0.g7sd3.mongodb.net/topics?retryWrites=true&w=majority";
mc.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object

        let databaseObj = client.db("topics")
        let myblogObj = databaseObj.collection("topic")
        let myblogObj2 = databaseObj.collection("subtopic")

        app.set("myblogObj", myblogObj)
        app.set("myblogObj2", myblogObj2)


        console.log("connected to database")

    }
})
app.use("/user", userApi)
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})
