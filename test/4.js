var express=require("express")
var app=express()
var router=express.Router()

app.use("/start.html",router)

router.get("/home.html",(req,res)=>
{
	res.sendFile(__dirname+'/'+'home.html')
})

router.get("/contact.html",(req,res)=>
{
	res.sendFile(__dirname+'/'+'contact.html')
})
app.listen(9000)