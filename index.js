const metascraper = require('metascraper')([
	require('metascraper-title')(),
	require('metascraper-description')(),
]);

const request = require('request');

module.exports = async uri => {
	if (!uri) {
		return;
	}

	const getUrlData = new Promise((resolve, reject) => {
		request.get(uri, {timeout: 3000}, (err, response, html) => {
			if (err) {
				reject(null);
			}
			resolve({html, uri});
		});
	});

	try {
		const {html, url} = await getUrlData(url);
		return metascraper({html, url});
	} catch (e) {
		// If we cannot get the targetted url, just ignore it and carry on.
		return null;
	}
};
