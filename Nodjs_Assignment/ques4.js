const path = require('path');

const filePath = '/Users/JohnDoe/Documents/project/index.html';

const dirName = path.dirname(filePath);
console.log("Directory Name: ", dirName);

const baseName = path.basename(filePath);
console.log("Base Name: ", baseName);

const extName = path.extname(filePath);
console.log('Extension Name:', extName);

const absolutePath = path.resolve('Documents', 'project', 'index.html');
console.log('Resolved Absolute Path:', absolutePath);

const unnormalizedPath = '/Users/JohnDoe//Documents/../Documents/project/index.html';
const normalizedPath = path.normalize(unnormalizedPath);
console.log('Normalized Path:', normalizedPath);
