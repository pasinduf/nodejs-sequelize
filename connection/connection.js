const Sequelize = require("sequelize");
const CustomerModel = require("../model/customer");
const ItemModel = require("../model/item");

const db = new Sequelize("testdb", "devuser", "pasi@1231", {
  host: "45.32.109.196",
  dialect: "mysql",
  port: "3306",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Customer = CustomerModel(db, Sequelize);
const Item = ItemModel(db, Sequelize);

//create database & tables
db.sync({ force: false }).then(() => {
  console.log(`tables created!`);
})
  .catch(function (err) {
    console.log(err);
  });

module.exports = db;
module.exports = { Customer, Item };
