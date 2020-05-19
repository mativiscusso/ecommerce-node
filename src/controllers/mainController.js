const fs = require("fs");
const path = require('path')
let archivoJson = path.join(__dirname, )

//* Traigo los productos del JSON
let productos = JSON.parse(
  fs.readFileSync("./src/data/productsDataBase.json", "utf-8")
);

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// let newProductos = productos.map((producto) => {
//   return producto;
// });

//* Filtro los productos por categoria
let productosEnOferta = productos.filter((item) => item.category === "in-sale");
let productosVisitados = productos.filter(
  (item) => item.category === "visited"
);

module.exports = {
    home: (req, res, next) => {
        res.render("index", {
          productosEnOferta,
          productosVisitados,
        });
      },
    login : (req,res) =>{
        res.render('user/login')
    },
    registro : (req,res) =>{
        res.render('user/registro')
    }
};
