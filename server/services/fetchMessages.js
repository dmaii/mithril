const _ = require('lodash')

const parse = require('../daos/parser')
const playerUtil = require('../lib/util/player')

module.exports = function (filepath) {
  return new Promise(function (resolve, reject) {
    parse(filepath)
    .then(function (game) {
      var playerMap = {}

      for (var i = 0; i < game.Players.length; i++) {
        var player = game.Players[i]
        playerMap[player.Name] = player
      }

      for (var x = 0; x < game.Messages.length; x++) {
        var msg = game.Messages[x] || []
        var p = playerMap[msg.PlayerName]

        var heroName = playerUtil.getHeroName(p.Hero)

        msg.playerDisplayName = msg.PlayerName + '(' +
          _.startCase(heroName) + ')'

        msg.iconURL = playerUtil.getHeroIcon(heroName)
        msg.team = playerUtil.getTeam(p.Team)
      }

      resolve(game)
    })
    .catch(function (err) {
      reject(err)
    })
  })
}
