const express = require('express')

const app = express()

const Router = require("./src/components/Router/router")


app.get("/",((req,res)=>{
    res.send("Server is running")
}))

app.use(express.json())
app.use(Router.routes)


app.listen(4000,()=>{
    console.log("server runing in http://localhost:4000")
})