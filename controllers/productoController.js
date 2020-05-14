const fs = require("fs");

//* Traigo los productos del JSON
let productos = JSON.parse(
  fs.readFileSync("./data/productsDataBase.json", "utf-8")
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
  index: function (req, res, next) {
    res.render("index", {
      productosEnOferta,
      productosVisitados,
    });
  },
  detalleProducto: function (req, res) {
    let categoria = req.params.categoria;
    let id = req.params.id;
    let producto = null;
    if (categoria == "visited") {
      producto = productosVisitados.find((visitados) => visitados.id == id);
    }
    if (categoria == "in-sale") {
      producto = productosEnOferta.find((ofertas) => ofertas.id == id);
    }
    if (producto) {
      res.render("detalle-producto", { detalleProducto: producto });
    } else {
      let error = {
        message: "Producto no encontrado",
        error: {
          status: 404,
          stack: "",
        },
      };
      res.render("error", error);
    }
  },
  todos: function (req, res) {
    res.render("productos", { productos });
  },
};
