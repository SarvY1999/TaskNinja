const createTask = (req, res) => {
    res.send('Create task Controller');
};

const updateTask = (req, res) => {
    res.send('Update task Controller');
};

const getTask = (req, res) => {
    res.send('Get task Controller');
};

const getAllTask = (req, res) => {
    res.send('Get all task Controller');
};

const deleteTask = (req, res) => {
    res.send('Delete task Controller');
};

module.exports = {
    createTask,
    updateTask,
    getTask,
    getAllTask,
    deleteTask
}