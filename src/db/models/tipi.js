"use strict";
module.exports = (sequelize, DataTypes) => {
  var Tipi = sequelize.define(
    "Tipi",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Tipi.associate = function(models) {
    Tipi.hasMany(models.Message, {
      foreignKey: "tipiId",
      as: "messages"
    });
  };
  return Tipi;
};
