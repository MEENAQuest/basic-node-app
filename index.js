const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=> {
    res.render('/index.html')
})

app.listen(3000, function() {
    console.log("Server started succesfully");
})


