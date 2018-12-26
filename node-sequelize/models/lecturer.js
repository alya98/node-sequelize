'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
    lecturer_name: DataTypes.STRING,
  }, {underscored: true});
  Lecturer.associate = function(models) {
    Lecturer.hasOne(models.Course, {
      foreignKey: 'lecturer_id',
      as: 'course',
    });
  };
  return Lecturer;
};