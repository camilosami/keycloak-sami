// dependdencies
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// keycloak realm public key
const keycloakPk = fs.readFileSync(path.resolve(__dirname, '../keycloak-pk.pem'));

function validate(token) {
	try {
		// validate!
		jwt.verify(token, keycloakPk);
	} catch (err) {
		throw {
			code: err.name,
			message: err.message
		}
	}	
}

 module.exports = {
	 validate
 }
