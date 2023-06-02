const express = require('express');
const taskRouter = express.Router();
const { createTask,
    updateTask,
    getTask,
    getAllTask,
    deleteTask } = require('../controllers/taskController');

taskRouter.route('/').get(getAllTask);
taskRouter.route('/createTask').post(createTask)
taskRouter.route('/task/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = taskRouter;