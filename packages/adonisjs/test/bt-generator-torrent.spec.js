const test = require('japa')
const { Torrent } = require('../src/BitTorrentProvider/helpers/generator')

test.group('Torrent generator', () => {
  test('torrent should return an object', assert => {
    const torrent = Torrent()
    console.log(torrent)
    assert.isObject(torrent)
  })
})
