const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response',
  };

  return respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
  const responseJSON = {
    message: 'This request has the required parameters'
  };
  
  if(!params.valid || params.valid !== 'true'){
    //send a 400

    responseJSON.message = 'Missing valid query parm equal to true';
    respondJSON.id = 'badRequestMissingParam'
    return respondJSON(request, response, 400, responseJSON);
  }
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

};

module.exports = {
  success,
  badRequest,
  notFound,
};
