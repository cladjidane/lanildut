export default {
  // Functions return fixtures
  getGame: () => {
    return {
      ok: true,
      data: require('../Fixtures/game.json')
    }
  }
}
