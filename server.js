require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const home = require('./routes/homeRoute')
const todo = require('./routes/TodoRoutes')
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected');
}).catch((err)=>console.log(err.message))

app.use(cors())
app.use(bodyParser.json())

app.use(home)
app.use('/todos', todo)

app.listen(process.env.PORT, ()=>{
  console.log(`listening on port ${process.env.PORT}`); 
})