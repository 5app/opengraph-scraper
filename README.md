# Opengraph Scraper

This is a utility extending the functionality of the popular [metascraper](https://www.npmjs.com/package/metascraper) library for obtaining metatags from target urls.

The util acheives this by packing the functionality together with request, to handle fetching and parsing the tags in one place.

Usage:
```javascript
const opengraphScraper = require('@5app/opengraph-scraper');

async function() {
	const {title, description} = await opengraphScraper();
	console.log('Title: ', title, '- Description: ', description);
	// returns {} if no results found.
}();
```

Dependencies:
- request
- metascraper
- metascraper-title
- metascraper-description
