const R = require('ramda')
const intFromString = require('string-hash')
const {
  random: { uuid, number },
  date: { recent },
  system: { commonFileName },
  seed,
} = require('faker')

const { STATUS_MAP } = require('./constants')

const Torrent = (hashString = null, props = {}) => {
  const SEED_ID = R.is(String, hashString) ? hashString : null

  // set custom seed to have consistent results
  if (SEED_ID) {
    seed(intFromString(SEED_ID))
  }

  /**
   * CONSTANTS
   */
  const FILES_COUNT = number({ min: 1, max: 4 })
  const TORRENT_NAME = commonFileName().replace(FILES_COUNT > 1 ? '.' : '', '')
  const TORRENT_SIZE = number({ min: 10000, max: 900000000 })

  const TorrentFile = () => ({
    bytesCompleted: TORRENT_SIZE,
    length: TORRENT_SIZE,
    name: FILES_COUNT > 1 ? `${TORRENT_NAME}/${commonFileName()}` : TORRENT_NAME,
  })

  return {
    // addedDate: Date.parse(recent(3)),
    // doneDate: Date.parse(recent(1)),
    // downloadDir: '/downloads/complete',
    // downloadedEver: totalSize,
    // error: 0,
    // errorString: '',
    // eta: -1,
    // fileStats: [
    //   {
    //     bytesCompleted: totalSize,
    //     priority: 0,
    //     wanted: true,
    //   },
    // ],
    // files: R.range(0, FILES_COUNT).map(() => TorrentFile()),
    // files: [
    //   {
    //     bytesCompleted: totalSize,
    //     length: totalSize,
    //     name: fileName(),
    //   },
    // ],
    hashString: SEED_ID || R.replace(/-/g, '', uuid()),
    id: number({ min: 0, max: 999 }),
    // leftUntilDone: 0,
    name: TORRENT_NAME,
    // peersGettingFromUs: 0,
    // peersSendingToUs: 0,
    // percentDone: 1,
    // priorities: [
    //   1,
    // ],
    // rateDownload: 0,
    // rateUpload: 0,
    // sizeWhenDone: totalSize,
    // startDate: Date.parse(recent(2)),
    // status: STATUS_MAP.SEED,
    // totalSize,
    // uploadedEver: 0,
    // wanted: [
    //   1,
    // ],
    // ...props,
  }
}

module.exports = {
  Torrent,
}
