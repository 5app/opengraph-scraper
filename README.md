# Opengraph Scraper

This is a utility extending the functionality of the popular [metascraper](https://www.npmjs.com/package/metascraper) library for obtaining metatags from target urls.

The util acheives this by packing the functionality together with request, to handle fetching and parsing the tags in one place.

Usage:
```typescript
const opengraphScraper = require('@5app/opengraph-scraper');

async function(url: string): object {
	const {title, description} = await opengraphScraper(url);
	console.log('Title: ', title, '- Description: ', description);
	// returns {} if no results found.
}();
```

Dependencies:
- request
- metascraper
- metascraper-title
- metascraper-description

ToDo:
- Current utility only requires title and description, would like in the future for this to handle arbritrary tags, however I do not wish to bloat the module with needless imports for now.
