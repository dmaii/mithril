var parse = require('../daos/parser')

module.exports = function (filepath) {
  return new Promise(function (resolve, reject) {
    parse(filepath)
    .then(function (game) {
      var playerHero = {}

      for (var i = 0; i < game.Players.length; i++) {
        var player = game.Players[i]
        playerHero[player.Name] = player.Hero
      }

      for (var x = 0; x < game.Messages.length; x++) {
        var msg = game.Messages[x]

        msg.playerDisplayName = msg.PlayerName + '(' +
        playerHero[msg.PlayerName] + ')'
      }
    })
    .catch(function (err) {
      reject(err)
    })
  })
}
