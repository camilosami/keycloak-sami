const jwt = require('jsonwebtoken');

function validate(token, publicKey) {
	try {
		// validate
		jwt.verify(token, publicKey);

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
