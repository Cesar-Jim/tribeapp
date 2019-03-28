"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipiId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
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

    Message.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Message;
};
