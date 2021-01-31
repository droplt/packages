const { ServiceProvider } = require('@adonisjs/fold')
const BitTorrentManager = require('../src/BitTorrentProvider')

class BitTorrentProvider extends ServiceProvider {
  register() {
    console.log('REGISTER BITTORRENT')
    this.app.singleton('BitTorrent', () => {
      const config = this.app.use('Adonis/Src/Config').get('bittorrent', {})
      return new BitTorrentManager(this.app, config)
    })
  }
}

module.exports = BitTorrentProvider
