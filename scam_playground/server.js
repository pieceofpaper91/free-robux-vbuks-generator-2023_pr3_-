const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('hallo nasa.................')
})

app.listen(3000, function (){
    console.log('yes')
})
