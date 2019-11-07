const metascraper = require('metascraper')([
	require('metascraper-title')(),
	require('metascraper-description')(),
]);

const request = require('request');

module.exports = uri => {
	if (!uri) {
		return;
	}

	const getUrlData = new Promise((resolve, reject) => {
		request.get(uri, {timeout: 3000}, (err, response, html) => {
			if (err) {
				reject({});
			}
			resolve({html, uri});
		});
	});

	return getUrlData
		.then(({html, uri}) => metascraper({html, url: uri}))
		.catch(error => ({error}));
};
