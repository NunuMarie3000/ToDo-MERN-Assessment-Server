const ToDoModel = require('../models/TodoModel')

const seedTodo = async() =>{
  todo1 = await ToDoModel.create({todo: "Feed the cat", isComplete:false})
  todo2 = await ToDoModel.create({todo: "Make the bed", isComplete:false})
  todo3 = await ToDoModel.create({todo: "Make a latte", isComplete:false})
  await todo1.save()
  await todo2.save()
  await todo3.save()
}

module.exports = seedTodo