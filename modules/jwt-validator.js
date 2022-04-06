const jwt = require('jsonwebtoken');
const util = require('util');

// azp. Authorized party - the party to which the ID Token was issued.
function validate(token, publicKey, clientId) {
	try {
		// validate
		const decode = jwt.verify(token, publicKey);

		// check clientID
		if (decode.azp !== clientId) {
			console.error(`\nRequest client: ${clientId} has no acceess to the realm client: ${decode.azp}\n`);
			return 401;
		}

		// success!
		console.info(`\nToken authenticated for the client: ${decode.azp}\n`);
		return null;
	} catch (err) {
		console.error(`\nToken not authenticated: ${err.message}\n`);

		// fail
		return 401;
	}	
}

 module.exports = {
	 validate
 }
