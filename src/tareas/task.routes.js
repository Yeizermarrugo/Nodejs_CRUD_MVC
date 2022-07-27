const router = require('express').Router()
const httpTasks = require('./task.http')

router.route('/task')
    .get(httpTasks.getAll)
    .post(httpTasks.createNewTask)

router.route('/task/:id')
    .get(httpTasks.getById)
    .put(httpTasks.updateNewTask)
    .delete(httpTasks.deleteById)

    module.exports ={
        router
    }