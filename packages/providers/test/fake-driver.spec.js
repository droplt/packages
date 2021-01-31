const test = require('japa')

test.group('Fake driver', () => {
  test('should return true', assert => {
    assert.equal(true, true)
  })
})
