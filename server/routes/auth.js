const { createUser, loginUser } = require("../controllers/authController");

const auth = (router) => {
  router.route("/api/auth/login").post((req, res) => loginUser(req, res));
  router.route("/api/auth/signup").post((req, res) => createUser(req, res));
};

module.exports = auth;
