const express = require('express')
const Quote =require('inspirational-quotes')

const app = express();

app.use((req , res ,next) =>{
    res.header('Access-Control-Allow-Origin' , '*')
    res.header('Access-Control-Allow-header' , 'Origin, X-Requested-With, Content-Type, Accept')
   next()
})  

app.get('/', (req ,res) =>{
    res.send(Quote.getQuote());
})

app.listen(3005, ()=> console.log('server is running...3005'))