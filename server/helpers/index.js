const { format } = require('date-fns')

module.exports = {
  checkInOutDate: date => format(date, 'Do MMM, HH:mm')
}
