const fs = require("fs");

module.exports = {
  leerJson: (rutaArchivo) => {
    JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));
  },
};
