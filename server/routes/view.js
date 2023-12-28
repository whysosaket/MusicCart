// const { createUser, loginUser } = require("../controllers/authController");

const { getAllProducts } = require("../controllers/viewController");

const view = (router) => {
  router.route("/api/view/all").get((req, res) => getAllProducts(req, res));
};

module.exports = view;
