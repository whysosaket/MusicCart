const { addProduct, addToCart, getCart, checkout  } = require("../controllers/productController");
const fetchuser = require("../middleware/fetchuser");

const product = (router) => {
  // router.route("/api/product/add").post((req, res) => addProduct(req, res));
  router.route("/api/product/addtocart").post(fetchuser, (req, res) => addToCart(req, res));
  router.route("/api/product/getcart").get(fetchuser, (req, res) => getCart(req, res));
  router.route("/api/product/checkout").get(fetchuser, (req, res) => checkout(req, res));
};

module.exports = product;
