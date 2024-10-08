"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    static associate(models) {
      // One-to-one relationship with User
      UserProfile.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
        onDelete: "CASCADE",
      });
    }
  }

  UserProfile.init(
    {
      contactNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cnic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      branch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );

  return UserProfile;
};
