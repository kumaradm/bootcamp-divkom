db = require("../models");
const Elektro = db.elektro;

exports.create = (req, res) => {
  if (!req.body.matkul) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  const elektro = {
    matkul: req.body.matkul,
    dosen: req.body.dosen,
  };

  Elektro.create(elektro)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured!",
      });
    });
};

exports.findAll = (req, res) => {
  Elektro.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured!",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Elektro.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error when retrieving data with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Elektro.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Data was updated successfully",
        });
      } else {
        res.send({
          message: "Data was not found or input was empty!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Elektro.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Data was deleted!",
        });
      } else {
        res.send({
          message: "Data was not found or input was empty!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Elektro.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} datas were deleted!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured!",
      });
    });
};
