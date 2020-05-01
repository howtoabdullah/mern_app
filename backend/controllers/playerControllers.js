import Player from '../models/playerModel';

export const createPlayer = (req, res) => {
  const newPlayer = new Player(req.body);

  newPlayer.save((err, player) => {
    if (err) {
      res.send(err);
    }

    res.json(player);
  });
};

export const getPlayers = (req, res) => {
  Player.find().exec((err, players) => {
    if (err) {
      res.send(err);
    }

    res.json({ players });
  });
};

export const getPlayerById = (req, res) => {
  Player.findById(req.params.id, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const updatePlayer = (req, res) => {
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, player) => {
    if (err) {
      res.send(err);
    }

    res.json(player);
  });
};

export const deletePlayer = (req, res) => {
  Player.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.send(err);
    }

    res.json({
      deleted: true,
      msg: 'Deleted Successfully',
    });
  });
};
