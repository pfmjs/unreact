# Unreact 2.0.0

### A lightweight react alternative, which way more simplerer to use, below is the installation guide and Usage guide

## Installation
```bash
npm install @pfmcodes/unreact
```
## Usage
<pre>
const { init, Element } = require('@pfmcodes/unreact');

// Initialize the app with a root tag
init("MyApp");

// Create elements
Element.create("h1", "MyApp"); // Creates an h1 tag with text "MyApp" as the root in body tag
Element.create("div");         // Creates a div tag
Element.create("p", "MyApp works!", "div"); // Adds a p tag inside the div tag with text

// Remove elements
Element.remove(Element); // Removes an element from the DOM

// You can use tag names, classes (".className"), or IDs ("#id") as selectors
</pre>
