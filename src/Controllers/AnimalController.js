const { restart } = require("nodemon");
const AnimalsModel = require("../Models/AnimalsModel");
const AnimalModel = require("../Models/AnimalsModel");

class AnimalController {
  async creater(req, res) {
    const { name, raca, age } = req.body;

    const animalReadyExists = await AnimalModel.findOne({ name: name });
    if (animalReadyExists) {
      return res
        .status(404)
        .json({ message: "Animal ready exists, please change name of animal" });
    }

    if (!name || !raca || age) {
      return res.status(400).json({ message: "title, raçaa, age não existem" });
    }
    const createdAnimal = await AnimalModel.create(req.body);

    return res.status(200).json(createdAnimal);
  }
  async index(req, res) {
    const animals = await AnimalModel.find();

    return res.status(200).json(animals);
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const animal = await AnimalModel.findById(id);
      if (!animal) {
        return res.status(404).json({ message: "Product does not exists" });
      }
      return res.status(200).json(animal);
    } catch (error) {
      return res.status(404).json({ message: "Product does not exists" });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      await AnimalModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "product update" });
    } catch (error) {
      return res.status(404).json({ message: "failed to update product" });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const animalDeleted = await AnimalModel.findByIdAndDelete(id);
      if (!animalDeleted) {
        return res.status(404).json({ message: "Product does not exists" });
      }
      return res.status(200).json({ message: "Product Deleted" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to update Product" });
    }
  }
}

module.exports = new AnimalController();
