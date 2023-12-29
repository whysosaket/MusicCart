// const { createUser, loginUser } = require("../controllers/authController");

const { getAllProducts, getProductById, getProductByNames, sortProducts } = require("../controllers/viewController");

const view = (router) => {
  router.route("/api/view/all").get((req, res) => getAllProducts(req, res));
  router.route("/api/view/:id").get((req, res) => getProductById(req, res));
  router.route("/api/view/name").post((req, res) => getProductByNames(req, res));
  router.route("/api/view/sort").post((req, res) => sortProducts(req, res));
};

module.exports = view;
