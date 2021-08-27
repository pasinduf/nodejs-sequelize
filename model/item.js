module.exports = (sequelize, type) => {
  return sequelize.define("item", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    description: type.STRING,
    unitPrice: type.DECIMAL(10, 2),
    quantity: type.DECIMAL(10, 2)
  });
};
