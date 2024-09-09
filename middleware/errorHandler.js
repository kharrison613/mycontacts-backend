const{VALIDATION_ERROR,
      UNAUTHORIZED,
      NOT_FOUND,
      FORBIDDEN,
      SERVER_ERROR,
    } = require("../constants");
const errorHandler = (error, req, res, next) => {
    let statusCode = res.statusCode || 500;

    console.log('Error Handler');
    console.log('Error:', error);
    console.log('Request:', req);
    console.log('Response:', res);
    console.log('Next:', next);

    const errorResponse = {
        title: 'Internal Server Error',
        message: error ? error.message : 'Unknown error',
    };

    if (process.env.NODE_ENV === 'development') {
        errorResponse.stackTrace = error ? error.stack : undefined;
    }

    switch (statusCode) {
        case VALIDATION_ERROR:
            errorResponse.title = 'Validation Error';
            break;
        case UNAUTHORIZED:
            errorResponse.title = 'Unauthorized';
            break;
        case NOT_FOUND:
            errorResponse.title = 'Not Found';
            break;
        case FORBIDDEN:
            errorResponse.title = 'Forbidden';
            break;
        case SERVER_ERROR:
            errorResponse.title = 'Server Error';
            break;
        default:
            break;
    }

    if (statusCode === 500) {
        console.error('Internal Server Error:', errorResponse);
    }

    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;