require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')
const connect = require('./Db/connectDb');
const errorHandler = require('./middleware/error-handler');


app.use(express.json());
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);


const port = process.env.PORT || 3000;
app.use(errorHandler);

const start = async () => {
    try {
        await connect(process.env.DBSTRING);
        app.listen(port, () => {
            console.log(`Server is listening at ${port}`);
        })
    } catch (error) {
        console.log(error);
    }

};

start();
