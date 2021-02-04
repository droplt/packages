const STATUS_MAP = {
  STOPPED: 0,
  CHECK_WAIT: 1,
  CHECK: 2,
  DOWNLOAD_WAIT: 3,
  DOWNLOAD: 4,
  SEED_WAIT: 5,
  SEED: 6,
  ISOLATED: 7,
}

const PROPS = [
  'id',
  'hashString',
  'name',
  // 'percentDone',
  // 'addedDate',
  // 'uploadRatio',
  // 'status',
  // 'error',
  // 'errorString',
  // 'totalSize',
  // 'files',
  // 'peersGettingFromUs',
  // 'peersSendingToUs',
  // 'rateDownload',
  // 'rateUpload',
]

module.exports = {
  STATUS_MAP,
  PROPS,
}
