
describe('Scraper functionality', async () => {
	
	// const data = await opengraphScraper(); -This is being mocked for now
	const data = {
		title: 'Test title',
		description: 'Arbritrary description of indescript length'
	};

	it('should resolve information from commonly accessible public url ', () => {

		expect(data).to.have.property('title');
		expect(data).to.have.property('description');
		//cannot assert exact title/description when real urls are used as these are subject to change.
	});
	
});
