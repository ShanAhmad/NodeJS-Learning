const fs = require('fs');
const textInput = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textInput);

const textOutput = `This is a new line of text. ${textInput}.`
fs.writeFileSync('./txt/output.txt',textOutput);
