const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  define: { timestamps: false },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;

db.user = require("../model/user.js")(sequelize, Sequelize);
db.province = require("../model/province.js")(sequelize, Sequelize);
db.state = require("../model/state.js")(sequelize, Sequelize);
db.touriste = require("../model/touriste.js")(sequelize, Sequelize);
db.visitor = require("../model/visitor.js")(sequelize, Sequelize);
// db.notification = require('../model/notification')(sequelize, Sequelize);

db.province.hasMany(db.state, { foreignKey: "provinceId", as: "States" });
db.state.belongsTo(db.province, { foreignKey: "provinceId" });

db.state.hasMany(db.touriste, { foreignKey: "stateId", as: "Touristes" });
db.touriste.belongsTo(db.state, { foreignKey: "stateId" });

db.user.hasMany(db.visitor, { foreignKey: "userId", as: "Users" });
db.visitor.belongsTo(db.user, { foreignKey: "userId" });

module.exports = db;
