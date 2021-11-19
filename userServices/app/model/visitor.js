module.exports = (sequelize, Sequelize) => {
    const Visitor = sequelize.define("visitors", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameVisitors: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      informations: {
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      }
    });
  
    return Visitor;
  };