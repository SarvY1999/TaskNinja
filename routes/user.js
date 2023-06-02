const express = require('express');
const userRouter = express.Router();

const {
    registerUser,
    loginUser,
    updateUser,
    getAllUser,
    getUser,
    deleteUser
} = require('../controllers/userController');

userRouter.route('/').get(getAllUser);
userRouter.route('/register').post(registerUser);
userRouter.route('/login').post(loginUser);
userRouter.route('/user/:id').get(getUser).patch(updateUser).delete(deleteUser);


module.exports = userRouter;