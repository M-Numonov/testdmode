const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const instructors = sequelize.define(
    'instructors',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      first_name: {
        type: DataTypes.TEXT,
      },

      last_name: {
        type: DataTypes.TEXT,
      },

      qualifications: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  instructors.associate = (db) => {
    db.instructors.belongsToMany(db.courses, {
      as: 'courses',
      foreignKey: {
        name: 'instructors_coursesId',
      },
      constraints: false,
      through: 'instructorsCoursesCourses',
    });

    db.instructors.belongsToMany(db.courses, {
      as: 'courses_filter',
      foreignKey: {
        name: 'instructors_coursesId',
      },
      constraints: false,
      through: 'instructorsCoursesCourses',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.instructors.belongsTo(db.organizations, {
      as: 'organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.instructors.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.instructors.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return instructors;
};
