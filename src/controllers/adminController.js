const fs = require("fs");

module.exports = {
  index: function (req, res) {
    res.render("admin/index");
  },
};
// crear: function (req, res) {
//   res.render("admin/crear");
// },
// guardar: function (req, res) {
//   res.redirect("admin/crear");
// },
// editar: function (req, res) {
//   res.render("admin/editar");
// },
// actualizar: function (req, res) {
//   res.redirect("admin/editar");
// },
// eliminar: function (req, res) {
//   res.redirect("admin/index");
// },
