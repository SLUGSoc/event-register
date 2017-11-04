'use strict'
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define(
    'Member',
    {
      cardNum: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      alias: DataTypes.STRING,
      hasPaid: DataTypes.BOOLEAN
    },
    {
      getterMethods: {
        fullName() {
          return this.firstName + ' ' + this.lastName
        }
      },
      setterMethods: {
        fullName(value) {
          const names = value.split(' ')

          this.setDataValue('firstName', names.slice(0, -1).join(' '))
          this.setDataValue('lastName', names.slice(-1).join(' '))
        }
      }
    }
  )

  Member.associate = models => {
    Member.belongsToMany(models.Event, {
      through: models.Register,
      as: 'events'
    })
  }

  return Member
}
