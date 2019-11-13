# Opengraph Scraper

Given a URL will return meta information about the page.

e.g. 

Usage:
```typescript
// Import
const opengraphScraper = require('@5app/opengraph-scraper');

// Set a timeout in ms
const timeout = 3000;

// Url
const url = 'https://twitter.com/';

// Returns object
const {title, description} = await opengraphScraper(url, timeout);

console.log('Title: ', title, '- Description: ', description);

// Title: 
```
