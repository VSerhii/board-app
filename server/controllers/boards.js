const path = require('path');
const jsonFileStorage = require('../helpers/jsonFileStorage');

const DATA = path.join(__dirname, '..', 'data', 'data.json');

exports.get = (req, res) => {
  jsonFileStorage.read(
    DATA,
    (data) => {
      res.send(data);
    },
  );
};

exports.set = (req, res) => {
  jsonFileStorage.read(
    DATA,
    (data) => {
      data.boards.push({ id: req.body.id, name: req.body.name });
      jsonFileStorage.write(DATA, data, () => res.send(JSON.stringify(data)));
    },
  );
};
