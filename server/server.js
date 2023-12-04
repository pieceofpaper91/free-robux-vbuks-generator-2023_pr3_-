const express = require('express')
const app = express()
app.use(express.static('../Abschlussprojekt_kayzed'))

app.get('/', function(req, res){
    res.send('<h1>hello nasa.... </h1><p>my name is....')
})

app.get('/google/:name', function(req, res){
    let search = req.params.name
    res.redirect('http://google.com/search?q=' + search)
})

app.get('/game', function(req, res){
    res.redirect('index.html')
})

app.get('/*', function(req, res){
    res.send('<h1>404 file not found</h1>')
})

app.listen(3000, function (){
    console.log('yes')
})