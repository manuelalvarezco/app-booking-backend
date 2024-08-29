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

module.exports = {
  logErrors,
  hendleError,
};
