const R = require('ramda')
const intFromString = require('string-hash')
const {
  random: {
    uuid,
    number,
  },
  date: {
    recent,
  },
  system: {
    fileName,
  },
  seed,
} = require('faker')

const { STATUS_MAP } = require('./constants')

const Torrent = (hashString = null, props = {}) => {
  const seedId = R.is(String, hashString) ? hashString : null

  // set custom seed to have consistent results
  if (seedId) {
    seed(intFromString(seedId))
  }

  const totalSize = number({ min: 10000, max: 900000000 })

  return {
    addedDate: Date.parse(recent(3)),
    doneDate: Date.parse(recent(1)),
    downloadDir: '/downloads/complete',
    downloadedEver: totalSize,
    error: 0,
    errorString: '',
    eta: -1,
    fileStats: [
      {
        bytesCompleted: totalSize,
        priority: 0,
        wanted: true,
      },
    ],
    files: [
      {
        bytesCompleted: totalSize,
        length: totalSize,
        name: fileName(),
      },
    ],
    hashString: seedId || R.replace(/-/g, '', uuid()),
    id: number({ min: 0, max: 999 }),
    leftUntilDone: 0,
    name: fileName(),
    peersGettingFromUs: 0,
    peersSendingToUs: 0,
    percentDone: 1,
    priorities: [
      1,
    ],
    rateDownload: 0,
    rateUpload: 0,
    sizeWhenDone: totalSize,
    startDate: Date.parse(recent(2)),
    status: STATUS_MAP.SEED,
    totalSize,
    uploadedEver: 0,
    wanted: [
      1,
    ],
    ...props,
  }
}

module.exports = {
  Torrent,
}
