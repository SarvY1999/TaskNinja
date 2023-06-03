const { StatusCodes } = require('http-status-codes');
const errorHandler = (err, req, res, next) => {

    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later'
    }

    if (err.name === 'CastError') {
        customError.msg = `No task found with id: ${err.value}`;
        customError.statusCode = StatusCodes.NOT_FOUND;
    }

    return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
