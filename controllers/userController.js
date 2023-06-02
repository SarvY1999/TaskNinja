const registerUser = (req, res) => {
    res.send('register User Controller');
};

const loginUser = (req, res) => {
    res.send('login user Controller');
};

const updateUser = (req, res) => {
    res.send('update user Controller');
};

const getAllUser = (req, res) => {
    res.send('Get all user Controller');
};

const getUser = (req, res) => {
    res.send('Get user Controller');
};

const deleteUser = (req, res) => {
    res.send('Delete user Controller');
};

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    getAllUser,
    getUser,
    deleteUser
}