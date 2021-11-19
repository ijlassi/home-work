module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.STRING,
      },
      sexe: {
        type: Sequelize.STRING,
      },
  
      phoneNumber: {
        type: Sequelize.STRING,
      }
    });
  
    return User;
  };