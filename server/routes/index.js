const expess = require("express");
const router = expess.Router();

const auth =require("./auth");


export default ()=> {
  auth(router);

  return router;
};