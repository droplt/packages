const { Manager } = require('@poppinss/manager')

class BitTorrentManager extends Manager {
  constructor(app, config) {
    super(app)
    this.config = config
    this.fake = false
  }

  get singleton() { return true }

  async all() {
    if (this.fake) return this.fake.all()
    return this.use().all()
  }

  async get(id) {
    if (this.fake) return this.fake.get(Number(id))
    return this.use().get(Number(id))
  }

  async parse(filename) {
    if (this.fake) return this.fake.parse(filename)
    return this.use().parse(filename)
  }

  async add(filename) {
    if (this.fake) return this.fake.add(filename)
    return this.use().add(filename)
  }

  // async start(id) {
  //   if (this.fake) return this.fake.start(Number(id))
  //   return this.use().start(Number(id))
  // }

  // async stop(id) {
  //   if (this.fake) return this.fake.stop(Number(id))
  //   return this.use().stop(Number(id))
  // }

  // async update(id) {
  //   if (this.fake) return this.fake.update(Number(id))
  //   return this.use().update(Number(id))
  // }

  // async delete(id) {
  //   if (this.fake) return this.fake.delete(Number(id))
  //   return this.use().delete(Number(id))
  // }

  /*
  |--------------------------------------------------------------------------
  | Handle multiple providers
  |--------------------------------------------------------------------------
  */
  getDefaultMappingName() {
    return this.config.driver
  }

  getMappingConfig(mappingName) {
    return this.config[mappingName]
  }

  getMappingDriver(mappingName) {
    return this.getMappingConfig(mappingName).driver
  }

  createTransmission(_, config) {
    // eslint-disable-next-line global-require
    const Transmission = require('./drivers/Transmission')
    return new Transmission(config.connection)
  }

  createFake() {
    // eslint-disable-next-line global-require
    const Fake = require('./drivers/Fake')
    this.fake = new Fake()
    return this.fake
  }

  mock() {
    return this.createFake()
  }

  use(mappingName) {
    return mappingName ? super.use(mappingName) : super.use()
  }
}

module.exports = BitTorrentManager
