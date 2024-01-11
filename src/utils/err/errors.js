// errorHandling.js
const NOT_FOUND_MESSAGE = "Film not found!";
const NOT_FOUD_MODEL = 'Model our film not found!'
const SUCCESS_STATUS_CODE = 200;
const NOT_FOUND_STATUS_CODE = 404;

module.exports = {
    notFoundError: {
        message: NOT_FOUND_MESSAGE,
        statusCode: NOT_FOUND_STATUS_CODE,
    },
    successStatusCode: SUCCESS_STATUS_CODE,
    notFoundModel: {
        message: NOT_FOUD_MODEL,
        statusCode: NOT_FOUND_STATUS_CODE
    }
};
