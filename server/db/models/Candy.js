const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: { max: 10 }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.sugarfina.com/media/catalog/product/cache/thumbnail/290x290/beff4985b56e3afdbeabfc89641a4582/p/0/p0106-dish.jpg'
  }
});
