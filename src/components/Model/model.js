const { connection } = require("../Connecrion/connection");

const addUserModel = ({ name, age, qualification, address }) => {
  return new Promise((resolve, reject) => {
    let query =
      "INSERT INTO user_details (name, age, qualification, address) VALUES (?, ?, ?, ?)";

    connection.query(
      query,
      [name, age, qualification, address],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  });
};

const getUserModel = () => {
  console.log("getmodel");
  return new Promise((resolve, reject) => {
    let query = `
      SELECT id, name, age, qualification, address 
      FROM user_details where isDelete = 0
    
    `;

    connection.query(query,(err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateUserModel = ({ name, age, qualification, address, id }) => {
  return new Promise((resolve, reject) => {
    let query =
      "UPDATE user_details SET name =?, age = ?, qualification = ? , address =? Where id =? ";

    connection.query(
      query,
      [name, age, qualification, address, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  });
};

const deleteUserModel = (id) => {
  return new Promise((resolve, reject) => {
    let query = "UPDATE user_details SET isDelete =1  Where id =? ";

    connection.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports = {
  addUserModel,
  getUserModel,
  updateUserModel,
  deleteUserModel,
};
