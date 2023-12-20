const { createUser, loginUser } = require("../controller/authController");

export default (router) => {
    router.route("/api/auth/login").post((req, res)=>loginUser(req, res));
    router.route("/api/auth/signup").post((req, res)=>createUser(req, res));
}