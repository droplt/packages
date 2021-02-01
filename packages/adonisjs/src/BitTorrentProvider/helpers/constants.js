const STATUS = [
  'STOPPED',
  'CHECK_WAIT',
  'CHECK',
  'DOWNLOAD_WAIT',
  'DOWNLOAD',
  'SEED_WAIT',
  'SEED',
  'ISOLATED',
]

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
  STATUS,
  PROPS,
}
