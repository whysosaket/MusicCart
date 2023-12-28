const expess = require("express");
const router = expess.Router();

const auth = require("./auth");

const r = () => {
  auth(router);
  return router;
};

module.exports = r;
