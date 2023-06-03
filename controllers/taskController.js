const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');
const Task = require('../models/Task');
const NoTaskError = require('../errors/NoTaskError');

const createTask = async (req, res) => {
    const { task, description, status } = req.body;

    if (!task || !description) {
        throw new NoTaskError('Please Provide all the fields', StatusCodes.BAD_REQUEST);
    }
    const createdtask = await Task.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({ createdtask });
};

const updateTask = async (req, res) => {
    const { body: { task, description, status }, params: { id: taskid } } = req;

    if (!task || !description || !status) {
        throw new NoTaskError('Please Provide all the fields', StatusCodes.BAD_REQUEST);
    };
    const updatedTask = await Task.findOneAndUpdate({ _id: taskid }, req.body, { new: true, runValidators: true });
    res.status(StatusCodes.OK).json({ updatedTask });
};

const getTask = async (req, res) => {
    const taskid = req.params.id;
    const task = await Task.findOne({ _id: taskid });
    res.status(StatusCodes.OK).json({ task });
};

const getAllTask = async (req, res) => {
    const tasks = await Task.find({});
    res.status(StatusCodes.OK).json({ tasks });
};

const deleteTask = async (req, res) => {
    const { params: { id: taskid } } = req;
    const task = await Task.findOneAndUpdate({ _id: taskid }, { status: 'Removed' }, { new: true });

    res.status(StatusCodes.OK).json({ task });
};

module.exports = {
    createTask,
    updateTask,
    getTask,
    getAllTask,
    deleteTask
}