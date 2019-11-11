const metascraper = require('metascraper')([
	require('metascraper-title')(),
	require('metascraper-description')(),
]);

const request = require('request');

module.exports = (url, timeout = 3000) => {
	if (!url) {
		return;
	}

	const getUrlData = new Promise((resolve, reject) => {
		const req = request.get(url, {timeout}, (err, response, html) => {
			if (err) {
				reject();
			}
			resolve({html, url});
		});

		setTimeout(() => {
			req.abort();
			reject();
		}, timeout);
	});

	return getUrlData
		.then(({html, url}) => metascraper({html, url}))
		.catch(error => ({error}));
};
