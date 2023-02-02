const startDB = require("./mongodb");
//Cria uma classe para inicializar o banco de dados
class Loaders {
  start() {
    startDB();
  }
}

module.exports = new Loaders();
