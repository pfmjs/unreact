const { init, Element } = require('./index');

init('My Site');

const el = new Element();
let hone = el.create('h1', 'Welcome to my site');
el.remove(hone);
