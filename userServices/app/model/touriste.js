module.exports = (sequelize, Sequelize) => {
    const Toursite = sequelize.define("touristes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
      },
      video360: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      }
    });
  
    return Toursite;
  };