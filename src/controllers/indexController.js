const menu = [
  {
    id: 1,
    name: "Carpaccio fresco",
    description: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
  },
  {
    id: 2,
    name: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: "U$S 47.00",
  },
  {
    id: 3,
    name: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar ",
    price: "U$S 27.50",
  },
  {
    id: 4,
    name: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "U$S 37.50",
  },
  {
    id: 5,
    name: "Mila con papas",
    description: "Milanesas con papas fritas ñam ñam",
    price: "U$S 2.00",
  },
];

const controller = {
  index: (req, res) => {
    res.render("index", { menu: menu });
  },
  detalle: (req, res) => {
    const id = req.params.id;
    res.render("detalleMenu", { id: id, menu: menu });
  },
};

module.exports = controller;
