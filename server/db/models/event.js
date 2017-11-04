'use strict'
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define(
    'Event',
    {
      name: DataTypes.STRING
    },
    {}
  )

  Event.associate = models => {
    Event.belongsToMany(models.Member, {
      through: models.Register,
      as: 'attendees'
    })
  }

  return Event
}
