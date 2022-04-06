const jwt = require('jsonwebtoken');
const util = require('util');

// azp. Authorized party - the party to which the ID Token was issued.
function validate(token, publicKey) {
	try {
		// validate
		const decode = jwt.verify(token, publicKey);
		console.log('decode', util.inspect(decode, false, Infinity, true));

		// success!
		return true;
	} catch (err) {
		console.error({
			code: err.name,
			message: err.message
		});

		// fail
		return false;
	}	
}

 module.exports = {
	 validate
 }
