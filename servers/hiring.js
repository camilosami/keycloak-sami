const jwt = require('../modules/jwt-validator')
const fs = require('fs');
const path = require('path');

// Hiring realm public key
const healmPublicKey = fs.readFileSync(path.resolve(__dirname, '../keys/hiring-pubkey.pem'));

const fastify = require('fastify')({
	logger: true
})

fastify.get('/', async (request, reply) => {
	const token = request.headers.authorization && request.headers.authorization.split(' ')[1];

	if (!jwt.validate(token, healmPublicKey)) {
		// unauthorized
		reply.type('application/json').code(401);
		return {};
	}

	// success
	reply.type('application/json').code(200)
	
	// response
	return { 
		hello: 'Hiring' 
	};
})
  
fastify.listen(3000, (err, address) => {
	if (err) throw err
  })