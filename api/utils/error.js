export const errorHandler = (statusCode, message) => {
  //create a new error
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;

  return error;
};
