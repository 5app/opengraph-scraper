const opengraphScraper = require('../../index.js');

describe('Scraper functionality', async () => {

	const correct = await opengraphScraper('https://twitter.com/?lang=en-gb');
	const incorrect = await opengraphScraper('https://thisisnonsenseical567.com');
	const large = await opengraphScraper('http://de.releases.ubuntu.com/xenial/ubuntu-16.04.6-desktop-amd64.iso');

	it('should resolve information from commonly accessible public url ', () => {
		expect(correct).to.have.property('title');
		expect(correct).to.have.property('description');
	});

	it('should not resolve information from a fake url ', () => {
		expect(incorrect).to.not.have.property('title');
		expect(incorrect).to.not.have.property('description');
	});

	it('should not hang on large files ', () => {
		expect(large).to.exist();
		expect(large).to.not.have.property('title');
		expect(large).to.not.have.property('description');
	});
});
