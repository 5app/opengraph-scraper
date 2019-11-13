const opengraphScraper = require('../../index.js');

describe('Scraper functionality', () => {

	it('should resolve information from commonly accessible public url ', async () => {
		const correct = await opengraphScraper('https://twitter.com/?lang=en-gb');
		expect(correct).to.have.property('title');
		expect(correct).to.have.property('description');
	});

	it('should not resolve information from a fake url ', async () => {
		const incorrect = await opengraphScraper('https://thisisnonsenseical567.com');
		expect(incorrect).to.not.have.property('title');
		expect(incorrect).to.not.have.property('description');
	});

	it('should not hang on large files', async () => {
		const large = await opengraphScraper('http://de.releases.ubuntu.com/xenial/ubuntu-16.04.6-desktop-amd64.iso', 1000);

		expect(large).to.exist.to.have.property('error');
		expect(large).to.not.have.property('title');
		expect(large).to.not.have.property('description');
	});
});
