const fs = require("fs");
const path = require("path");

//* Traigo los productos del JSON
let productos = JSON.parse(
  fs.readFileSync("./src/data/productsDataBase.json", "utf-8")
);

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// let newProductos = productos.map((producto) => {
//   return producto;
// });

//* Filtro los productos por categoria
let productosEnOferta = productos.filter((item) => item.category == "in-sale");
let productosVisitados = productos.filter((item) => item.category == "visited");

//* Generar ID
const generarID = () => Math.floor(Math.random() * 9999);

module.exports = {
  index: function (req, res) {
    res.render("productos/index", { productos });
  },
  show: function (req, res) {
    let id = req.params.id;
    let producto = productos.find((p) => p.id == id);

    if (producto) {
      res.render("productos/show", { detalleProducto: producto });
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
  create: (req, res) => {
    res.render("admin/productos/create");
  },
  store: (req, res, next) => {
    //guardar todos los productos en una variable

    //recibir los parametros del formulario
    let nuevoProducto = {
      id: generarID(),
      ...req.body,
      image : req.files[0].filename
    };
    //guardarlos en la variable de todos los productos
    productos.push(nuevoProducto);
    //escribir el archivo con todos los productos actualizado
    fs.writeFileSync(
      "./src/data/productsDataBase.json",
      JSON.stringify(productos, null, " ")
    );
    //redireccionar a listado de productos admin
    res.redirect("/productos");
  },
  edit: (req, res) => {
    let id = req.params.id;
    let producto = productos.find((ofertas) => ofertas.id == id);
    console.log(producto);

    res.render("admin/productos/edit", { producto });
  },
  update: (req, res) => {
    req.body.price = Number(req.body.price);
    req.body.discount = Number(req.body.discount);

    let productosModificado = productos.map((prod) => {
      if (prod.id == req.params.id) {
        return {
          id: prod.id,
          ...req.body,
          image: prod.image,
        };
      } else {
        return prod;
      }
    });

    // lo guardo en el json
    fs.writeFileSync(
      "./src/data/productsDataBase.json",
      JSON.stringify(productosModificado, null, " ")
    );
    // redirecciono a la lista de productos
    res.redirect("/admin");
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let productosFiltrados = productos.filter((p) => p.id != id);
    // lo guardo en el json
    fs.writeFileSync(
      "./src/data/productsDataBase.json",
      JSON.stringify(productosFiltrados, null, " ")
    );
    // redirecciono a la lista de productos
    res.redirect("/admin");
  },
};
