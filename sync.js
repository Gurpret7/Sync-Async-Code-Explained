var fs = require('fs');
console.log('started reading file');
try {
    var content;
    content = fs.readFileSync('./myFile.txt')
}
catch (err) {
    console.log(err);
}
console.log(content);
console.log('End reading file');
