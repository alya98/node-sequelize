'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    class_name: DataTypes.STRING
  }, {underscored: true});
  Classroom.associate = function(models) {
    Classroom.hasMany(models.Student, {
      foreignKey: 'classroom_id',
      as: 'students',
    })
  };
  return Classroom;
};
