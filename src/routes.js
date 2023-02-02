const { Router } = require("express");

const AnimalController = require("./Controllers/AnimalController");

const routes = Router();

routes.get("/teste", (req, res) => {
  return res.status(200).json({ message: "server is on..." });
});

routes.post("/animals", AnimalController.creater);
routes.get("/animals", AnimalController.index);
routes.get("/animals/:id", AnimalController.show);
routes.put("/animals/:id", AnimalController.update);
routes.delete("/animals/:id", AnimalController.destroy);

module.exports = routes;
