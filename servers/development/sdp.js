// config
require('dotenv').config()

const jwt = require('../../modules/jwt-validator')
const fs = require('fs');
const path = require('path');

// Hiring realm public key
const healmPublicKey = fs.readFileSync(path.resolve(__dirname, '../../keys/development/sdp-pubkey.pem'));

const fastify = require('fastify')({
	logger: true
})

fastify.get('/development/hello', async (request, reply) => {
	const token = request.headers.authorization && request.headers.authorization.split(' ')[1];

	const errorCode = jwt.validate(token, healmPublicKey, process.env.SDP_DEVELOPMENT_CLIENT_ID);
	if (errorCode) {
		reply.type('application/json').code(errorCode);
		return {};
	}

	// success
	reply.type('application/json').code(200)
	
	// response
	return { 
		hello: 'Sami Data Platform Development' 
	};
})
  
fastify.listen(3006, (err, address) => {
	if (err) throw err
})