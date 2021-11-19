module.exports = (sequelize, Sequelize) => {
    const Province = sequelize.define("provinces", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameProvince: {
        type: Sequelize.STRING,
      }
    });
  
    return Province;
  };