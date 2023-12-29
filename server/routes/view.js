const { getAllProducts, getProductById, getProductByNames, sortFilterProducts } = require("../controllers/viewController");

const view = (router) => {
  router.route("/api/view/all").get((req, res) => getAllProducts(req, res));
  router.route("/api/view/:id").get((req, res) => getProductById(req, res));
  router.route("/api/view/name").post((req, res) => getProductByNames(req, res));
  router.route("/api/view/sfp").post((req, res) => sortFilterProducts(req, res));
};

module.exports = view;
