const { HttpStatus } = require('./httpStatus');

function buildError(
  message = 'Internal Server Error, contact the suport',
  status = HttpStatus.INTERNAL_SERVER_ERROR
) {
  return {
    error: {
      status: status.number,
      data: {
        timestamp: Date.now(),
        name: status.name,
        message,
      },
    },
  };
}
function build(content) {
  return { content };
}
function send(res, result) {
  if (result.error) {
    return res.status(result.error.status).json(result.error.data);
  }
  return res.json(result.content);
}

module.exports = {
  response: {
    buildError,
    build,
    send,
  },
};
