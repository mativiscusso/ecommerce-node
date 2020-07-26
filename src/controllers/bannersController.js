const db = require("../database/models");
const { Op } = db.Sequelize;

module.exports = {
  index: async (req, res) => {
    let banners = await db.Banner.findAll();
    return res.render("banners/", { banners });
  },
  show: (req, res) => { },
  create: async (req, res) => {
    res.render("banners/create");
  },
  store: (req, res, next) => {
    const banner = req.body;

    banner.image = req.file ? req.file.filename : req.body.oldImage;
    
    db.Banner.create(banner)
      .then((banner) => {
        return res.redirect(`/banners`);
      })
      .catch((error) => res.send(error));
  },
  //edit: async (req, res) => {},
  update: (req, res) => {
    const banner = req.body;

    banner.image = req.file ? req.file.filename : req.body.oldImage;

    db.Banner.update(banner, {
      where: { id: req.params.id },
    })
      .then((result) => {
        return res.redirect(`/banners`);
      })
      .catch((error) => res.send(error));
  },
  destroy: async (req, res) => {
    await db.Banner.destroy({ where: { id: req.params.id } });
    res.redirect(`/banners`);
  },
};
