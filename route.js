module.exports = function (app) {
  var customerController = require("./controller/customerController");

  app.route("/customer").get(customerController.getCustomers);
  app.route("/customer/:id").get(customerController.getCustomerById);
  app.route("/customer").post(customerController.postCustomer);
  app.route("/customer/:id").put(customerController.putCustomer);
  app.route("/customer/:id").delete(customerController.deleteCustomer);
  app.route("/sendSMS").post(customerController.sendSMS);
};
