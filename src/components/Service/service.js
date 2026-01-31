const Model = require("../Model/model");

const addUserService = async (userData) => {
  try {
    const data = await Model.addUserModel(userData);

    console.log(data, "data in service");

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserService = async () => {
  try {
    const data = await Model.getUserModel();
    console.log(data,"getuserService")
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateUserService = async (userData) => {
  try {
    const data = await Model.updateUserModel(userData);

    console.log(data, "data in service");

    return data;
  } catch (error) {
    console.log(error);
  }
};
const deleteUserService = async (userData) => {
  try {
    const data = await Model.deleteUserModel(userData.id);

    console.log(data, "data in service");

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addUserService, getUserService ,updateUserService,deleteUserService};
