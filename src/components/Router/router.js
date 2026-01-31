const express = require("express");
const routes = express.Router();

const controller = require('../controller/controller')


routes.post("/v1/user/addUser",controller.addUserController)
routes.get("/v1/user/getUser",controller.getUserController)
routes.patch("/v1/user/updateUser",controller.updateUserController)
routes.patch("/v1/user/deleteUser",controller.deleteUserController)


module.exports =  {routes }
