// const { sequelize, Sequelize, tutorials } = require(".");

// This Sequelize Model represents tutorials table in MySQL database.
// After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};
