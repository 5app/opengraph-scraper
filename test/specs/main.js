const opengraphScraper = require('../../index.js');

describe('Scraper functionality', () => {

	it('should resolve information from commonly accessible public url ', async () => {

		const correct = await opengraphScraper('https://twitter.com/?lang=en-gb');

		expect(correct)
			.to.have.keys('title', 'description');
	});

	it('should reject when URL is missing', async () => {

		const url = '';

		const fn = opengraphScraper(url);

		return expect(fn).to.eventually
			.rejectedWith(Error, 'ogs: missing url parameter');
	});

	it('should not resolve information from a fake url ', () => {

		const url = 'https://thisisnonsenseical567.com';

		const fn = opengraphScraper(url);

		return expect(fn).to.eventually
			.rejectedWith(Error, 'ENOTFOUND');
	});

	it('should not hang on large files', () => {

		const url = 'http://de.releases.ubuntu.com/xenial/ubuntu-16.04.6-desktop-amd64.iso';
		const fn = opengraphScraper(url, 1000);

		return expect(fn).to.eventually
			.rejectedWith(Error, 'ogs: timeout');
	});
});
