const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
	json: true
}, (error, response, body) => {
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Your lattitude is ${body.results[0].geometry.location.lat}`);
	console.log(`Your longitude is ${body.results[0].geometry.location.lng}`);
	console.log(`Here, look for yourself: ${JSON.stringify(body.results[0].formatted_address)}`);
});