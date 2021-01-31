class Fake {
  async all() {
    return []
  }

  async get(id) {
    return { id }
  }

  async parse(filename) {
    return { filename }
  }

  async add(filename) {
    return { filename }
  }
}

module.exports = Fake
