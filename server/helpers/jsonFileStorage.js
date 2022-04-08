const fs = require('fs');

const read = (filePath, callback, isJson = true, encoding = 'utf8') => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) throw err;

    callback(isJson ? JSON.parse(data) : data);
  });
};

const write = (filePath, data, callback, encoding = 'utf8') => {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (err) => {
    if (err) throw err;

    callback();
  });
};

const jsonFileStorage = {
  read,
  write,
};

module.exports = jsonFileStorage;
