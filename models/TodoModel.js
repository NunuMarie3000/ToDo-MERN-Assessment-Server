const mongoose = require('mongoose')

const ToDo = new mongoose.Schema({
  todo:{
    type: String,
    required:true,
  },
  isComplete:{
    type:Boolean,
    required:true
  }
})

const ToDoModel = mongoose.model("ToDo", ToDo)

module.exports = ToDoModel