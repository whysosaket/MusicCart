const { addProduct } = require("../controllers/productController");

const product = (router) => {
  router.route("/api/product/add").post((req, res) => addProduct(req, res));
};

module.exports = product;
