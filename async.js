var fs = require('fs');

console.log('Started reading File !');
var content = fs.readFile('./myFile.txt', function (err, content) {
    if (err) console.log(err);
    console.log(content);
})
console.log('End reading File !');
