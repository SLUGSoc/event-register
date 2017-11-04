'use strict'
module.exports = (sequelize, DataTypes) => {
  var Register = sequelize.define(
    'Register',
    {
      memberId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      present: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  )

  Register.associate = models => {
    Register.belongsTo(models.Member, {
      as: 'member'
    })
    Register.belongsTo(models.Event, {
      as: 'event'
    })
  }
  return Register
}
