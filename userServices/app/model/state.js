module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("states", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameState: {
        type: Sequelize.STRING,
      }
    });
  
    return State;
  };