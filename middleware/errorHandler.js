const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 400;
    res.json({message: err.message, stackTrace: err.stack});
};

module.exports = errorHandler;