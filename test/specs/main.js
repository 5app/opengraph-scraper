const opengraphScraper = require('../../index.js');
const nock = require('nock');

describe('Scraper functionality', () => {

	afterEach(() => {
		nock.cleanAll();
	});

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

	it('should not resolve information from http status greater than 400', () => {

		const url = 'https://httpstat.us/400';

		const fn = opengraphScraper(url);

		return expect(fn).to.eventually
			.rejectedWith(Error, 'ogs: http status: 400');
	});

	it('should not hang on timeouts', () => {

		nock('https://httpstat.us')
			.get('/200')
			.query({
				sleep: 5000
			})
			.reply((uri, requestBody, cb) => {
				setTimeout(() => cb(null, [201, 'Too late']), 5000);
			});

		const url = 'https://httpstat.us/200?sleep=5000';
		const fn = opengraphScraper(url, 1000);

		return expect(fn).to.eventually
			.rejectedWith(Error, 'ogs: timeout');
	});
});
