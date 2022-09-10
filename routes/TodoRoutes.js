const express = require('express')
const router = express.Router()
const ToDoModel = require('../models/TodoModel')

// get all todos
router.get('/', async (req,res)=>{
  try {
    const allTodos = await ToDoModel.find({})
    res.status(200).send(allTodos)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// create new todo
router.post('/', async (req,res)=>{
  try {
    const newTodo = await ToDoModel.create(req.body)
    console.log(req.body.isComplete)
    await newTodo.save()
    res.status(201).send(newTodo)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// update todo
router.put('/:id', async (req,res)=>{
  try {
    const updateMeId = req.params.id
    await ToDoModel.find().where("_id").equals(updateMeId).updateOne(req.body)
    res.status(204).send('Todo has been updated')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// delete todo
router.delete('/:id', async (req,res)=>{
  try {
    const deleteMeId = req.params.id
    await ToDoModel.deleteOne({"_id": {$eq: deleteMeId}})
    res.status(204).send('Todo has been deleted')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router