const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const students = sequelize.define(
    'students',
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

  students.associate = (db) => {
    db.students.belongsToMany(db.enrollments, {
      as: 'enrollments',
      foreignKey: {
        name: 'students_enrollmentsId',
      },
      constraints: false,
      through: 'studentsEnrollmentsEnrollments',
    });

    db.students.belongsToMany(db.enrollments, {
      as: 'enrollments_filter',
      foreignKey: {
        name: 'students_enrollmentsId',
      },
      constraints: false,
      through: 'studentsEnrollmentsEnrollments',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.students.hasMany(db.enrollments, {
      as: 'enrollments_student',
      foreignKey: {
        name: 'studentId',
      },
      constraints: false,
    });

    //end loop

    db.students.belongsTo(db.organizations, {
      as: 'organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.students.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.students.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return students;
};
