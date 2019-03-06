const fs = require('fs');

const key = fs.readFileSync('key.txt').toString();

module.exports = key;