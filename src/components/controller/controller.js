const { json } = require("express");

const Service = require("../Service/service");

const addUserController = async (req, res) => {
  try {
    const userData = req.body;

    console.log(userData, "userdata in controller");
    const data = await Service.addUserService(userData);
    console.log(data, "data in controller");

    res.json({ message: "user added Successfully", data: userData });
  } catch (error) {
    console.log(error);
  }
};

const getUserController = async (req, res) => {
    console.log("ckojijigetCont")
  try {
    const data = await Service.getUserService();

    console.log(data,"getContoller")

    res.json({ message: "user fetched Successfully", data: data });
  } catch (error) {
    console.log(error);
  }
};

const updateUserController = async (req, res) => {

  try {

    const updateData = req.body
    const data = await Service.updateUserService(updateData);

    res.json({ message: "user Updated Successfully", data: updateData });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserController = async (req, res) => {

  try {

    const updateData = req.body
    const data = await Service.deleteUserService(updateData);

    res.json({ message: "user deleted Successfully", data: updateData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addUserController, getUserController,updateUserController,deleteUserController};
