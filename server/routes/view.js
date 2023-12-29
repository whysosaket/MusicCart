// const { createUser, loginUser } = require("../controllers/authController");

const { getAllProducts, getProductById } = require("../controllers/viewController");

const view = (router) => {
  router.route("/api/view/all").get((req, res) => getAllProducts(req, res));
  router.route("/api/view/:id").get((req, res) => getProductById(req, res));
};

module.exports = view;
