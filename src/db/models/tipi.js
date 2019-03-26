'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tipi = sequelize.define('Tipi', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Tipi.associate = function(models) {
    // associations can be defined here
  };
  return Tipi;
};