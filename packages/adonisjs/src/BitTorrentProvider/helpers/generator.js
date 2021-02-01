const R = require('ramda')
const hash = require('string-hash')
const { random: { uuid, number }, seed } = require('faker')
const { STATUS } = require('./constants')

const Torrent = (hashString = null, props = {}) => {
  const seedId = R.is(String, hashString)

  // set custom seed to have consistent results
  if (seedId) {
    seed(hash(hashString))
  }

  return {
    hashString: seedId ? hashString : R.replace(/-/g, '', uuid()),
    status: number({ min: 0, max: STATUS.length }),
    totalSize: 0,
    ...props,
  }
}

module.exports = {
  Torrent,
}
