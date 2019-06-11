var express=require("express")
var app=express()
var mongoclient=require("mongodb").MongoClient

mongoclient.connect("mongodb://127.0.0.1/foo",function(err,db){
    if(!err)
    {
        console.log("connected")
        app.use(express.static("public"))

        app.get("/1b.html",(req,res)=>
        {
            res.sendFile(__dirname+'/'+'1b.html')
        })
        app.get("/insert",(req,res)=>
        {
            db.collection("foo").insert({name:req.query.name})
            res.end(JSON.stringify(req.query))
        })

        app.get("/display",(req,res)=>
        {
            db.collection("foo").find().sort().toArray(function(err,data){

                res.end(JSON.stringify(data))
                console.log(data)

            })
            
        })
        app.listen(9000)
    }
})