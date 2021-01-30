// const TransmissionPromise = require('transmission-promise')
// const withTree = require('./lib/tree')

// const PROPS = [
//   'id',
//   'hashString',
//   'name',
//   'percentDone',
//   'addedDate',
//   'uploadRatio',
//   'status',
//   'error',
//   'errorString',
//   'totalSize',
//   'files',
//   'peersGettingFromUs',
//   'peersSendingToUs',
//   'rateDownload',
//   'rateUpload',
// ]

// class Transmission {
//   constructor(Config) {
//     this.Config = Config

//     const {
//       host,
//       port,
//       user: username,
//       password,
//     } = this.Config.get('bittorrent.transmission.connection')

//     this.Client = new TransmissionPromise({
//       host,
//       port,
//       username,
//       password,
//     })
//   }

//   async start(id) {
//     return this.Client.start(Number(id))
//   }

//   async stop(id) {
//     const pid = Number(id)
//     this.Client.stop(pid)
//     return this.Client.waitForState(pid, 'STOPPED')
//   }

//   async add(path, options = {}) {
//     return this.Client.addBase64(path, options)
//   }

//   async delete(id) {
//     const pid = Number(id)
//     return this.Client.remove(pid, true)
//   }

//   async get(id) {
//     const pid = Number(id)
//     const { torrents: [torrent] } = await this.Client.get(pid, PROPS)
//     return withTree(torrent)
//   }

//   async all() {
//     const { torrents } = await this.Client.get(false, PROPS)
//     return torrents.map(torrent => withTree(torrent))
//   }

//   async stats() {
//     const session = await this.Client.session()
//     const stats = await this.Client.sessionStats()

//     const { 'download-dir-free-space': space } = session
//     const {
//       activeTorrentCount: active,
//       pausedTorrentCount: paused,
//       torrentCount: total,
//       'cumulative-stats': {
//         downloadedBytes: downloaded,
//         uploadedBytes: uploaded,
//         secondsActive: uptime,
//         filesAdded: added,
//       },
//     } = stats

//     return {
//       torrents: {
//         added,
//         total,
//         active,
//         paused,
//       },
//       network: {
//         downloaded,
//         uploaded,
//       },
//       disk: {
//         space,
//       },
//       stats: {
//         uptime,
//       },
//     }
//   }
// }

// module.exports = Transmission
