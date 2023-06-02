require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')


app.use(express.json());
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);


const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, () => {
        console.log(`Server is listening at ${port}`);
    })
};

start();
