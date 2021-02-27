const test = require('japa')
const { PROPS } = require('../src/BitTorrentProvider/helpers/constants')
const { Torrent } = require('../src/BitTorrentProvider/helpers/generator')

test.group('Torrent generator', () => {
  test('should return an object', assert => {
    assert.isObject(Torrent())
  })

  test('torrent should have all props', assert => {
    assert.hasAllKeys(Torrent(), PROPS)
  })

  test('should accept hash as first parameter', assert => {
    assert.exists(Torrent())
    assert.exists(Torrent(null))
    assert.exists(Torrent(undefined))
    assert.exists(Torrent(''))
    assert.exists(Torrent('test'))
    assert.exists(Torrent(1))
    assert.exists(Torrent([]))
    assert.exists(Torrent({}))
    assert.exists(Torrent(() => {}))
  })

  test('should return same torrent for same hash', assert => {
    assert.deepEqual(Torrent('test'), Torrent('test'))
  })
})
