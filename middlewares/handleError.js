function logErrors(err, req, res, next) {
  console.log('error');
  next(err);
}

function hendleError(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next();
  }
}

module.exports = {
  logErrors,
  hendleError,
  boomErrorHandler,
};
