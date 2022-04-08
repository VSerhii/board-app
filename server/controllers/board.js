const path = require('path');
const jsonFileStorage = require('../helpers/jsonFileStorage');

const DATA = path.join(__dirname, '..', 'data', 'data.json');

exports.get = (req, res) => {
  jsonFileStorage.read(
    DATA,
    (data) => {
      res.send(data.boards.find(({ id }) => id === req.params.id));
    },
  );
};

exports.set = (req, res) => {
  jsonFileStorage.read(
    DATA,
    (data) => {
      const board = data.boards.find(({ id }) => id === req.params.id);

      if (req.body.cardId) {
        const card = board.lists.find(({ id }) => id === req.body.cardId);
        if (card.items?.length) {
          card.items.push({ id: req.body.id, name: req.body.name });
        } else {
          card.items = [];
          card.items.push({ id: req.body.id, name: req.body.name });
        }
      } else if (!board.lists) {
        board.lists = [];
        board.lists.push({ id: req.body.id, name: req.body.name });
      } else {
        board.lists.push({ id: req.body.id, name: req.body.name });
      }

      jsonFileStorage.write(DATA, data, () => res.send(JSON.stringify(data)));
    },
  );
};
