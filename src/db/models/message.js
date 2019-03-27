"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Message.associate = function(models) {
    Message.belongsTo(models.Tipi, {
      foreignKey: "tipiId",
      onDelete: "CASCADE"
    });
  };
  return Message;
};
