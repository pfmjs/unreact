const fs = require('fs');
const c = require('child_process');
const path = require('path');
const cheerio = require('cheerio');

function init(u) {
    const dir = './dist';
    const ph = path.join(dir, "index.html");

    const dom = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${u}</title>
</head>
<body></body>
</html>`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(ph, dom);

    const serverPath = path.resolve(dir, 'server.js');

    const sjs = `
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log("Server running at http://localhost:3000");
});
`;

    fs.writeFileSync(serverPath, sjs);

    c.exec(`node "${serverPath}"`, (err, stdout, stderr) => {
        if (err) {
            console.error('Failed to start server:', err.message);
            return;
        }
        if (stderr) console.error('Server stderr:', stderr);
        if (stdout) console.log('Server stdout:', stdout);
    });
}

class Element {
    constructor() {
        this.filePath = path.join('./dist', 'index.html');
        const html = fs.readFileSync(this.filePath, 'utf-8');
        this.$ = cheerio.load(html);
    }

    create(tag, content, selector = 'body') {
        const element = `<${tag}>${content}</${tag}>`;
        this.$(selector).append(element);
        fs.writeFileSync(this.filePath, this.$.html(), 'utf-8');
    }

    remove(tag) {
        this.$(tag).remove();
        fs.writeFileSync(this.filePath, this.$.html(), 'utf-8');
    }
}

module.exports = { init, Element };
