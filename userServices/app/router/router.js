module.exports = function (app) {
  const controller = require("../controller/controller");

  app.post("/api/userServices/addProvince", controller.addProvince);
  app.post("/api/userServices/updateProvince", controller.updateProvince);
  app.post("/api/userServices/deleteProvince", controller.deleteProvince);
  app.post("/api/userServices/addState", controller.addState);
  app.post("/api/userServices/updateState", controller.updateState);
  app.post("/api/userServices/deleteState", controller.deleteState);
};

