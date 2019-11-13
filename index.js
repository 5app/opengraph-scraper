const metascraper = require('metascraper')([
	require('metascraper-title')(),
	require('metascraper-description')(),
]);

const request = require('request');

module.exports = async (url, timeout = 3000) => {
	if (!url) {
		throw new Error('ogs: missing url parameter');
	}

	const getUrlData = new Promise((resolve, reject) => {
		const req = request.get(url, {timeout}, (err, response, html) => {
			if (err) {
				return reject(err);
			}

			if (response.statusCode >= 400) {
				reject(new Error(`ogs: http status: ${response.statusCode}`));
			}
			resolve({html, url});
		});

		setTimeout(() => {
			req.abort();
			reject(new Error('ogs: timeout'));
		}, timeout);
	});

	return getUrlData
		.then(({html, url}) => metascraper({html, url}));
};
