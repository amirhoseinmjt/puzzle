const express = require('express')

const app = express()

app.use('view engine');

app.use(express.static('public'));

app.get('' , (req,res) =>{
    res.render()
})