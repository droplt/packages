const { ServiceProvider } = require('@adonisjs/fold')
const BitTorrentManager = require('./manager')

class BitTorrentProvider extends ServiceProvider {
  register() {
    this.app.singleton('BitTorrent', () => {
      const config = this.app.use('Adonis/Src/Config').get('bittorrent', {})
      return new BitTorrentManager(this.app, config)
    })
  }
}

module.exports = BitTorrentProvider
