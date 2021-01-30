const TransmissionPromise = require('transmission-promise')
const { PROPS } = require('../helpers/constants')

class Transmission {
  constructor({
    host, port, username, password,
  }) {
    this.client = new TransmissionPromise({
      host,
      port,
      username,
      password,
    })
  }

  async all() {
    const { torrents } = await this.client.get(false, PROPS)
    return torrents
  }

  async get(id) {
    const torrent = await this.client.get(id, PROPS)
    return torrent
  }

  async parse(filename) {
    return { filename }
    // const buffer = await Drive.get(filename)
    // return parser(buffer)
  }

  async add(filename) {
    return { filename }
    // const buffer = await Drive.get(filename)
    // return parser(buffer)
  }
}

module.exports = Transmission
