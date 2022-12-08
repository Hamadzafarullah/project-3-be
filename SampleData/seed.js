const Location = require('../models/Location')
const locationData = require('./location.json')

Location.deleteMany({}).then(() => {
    Location.create(locationData).then(location => {
        console.log(location)
        process.exit()
    })
})


Location.deleteMany()

  .then(() => Location.insertMany(locationData))

  .then(console.log)
  .catch(console.error)
  .finally(process.exit);

