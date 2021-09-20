module.exports = (app) => {
  const elektro = require("../controllers/elektro-controller");

  var router = require("express").Router();

  router.post("/", elektro.create);

  router.get("/", elektro.findAll);

  router.get("/:id", elektro.findOne);

  router.put("/:id", elektro.update);

  router.delete("/:id", elektro.delete);

  router.delete("/", elektro.deleteAll);

  app.use("/elektro", router);
};
