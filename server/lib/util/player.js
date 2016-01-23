module.exports = {
  getHeroIcon: function (hero) {
    var prefix = 'http://cdn.dota2.com/apps/dota2/images/heroes/'
    var suffix = '_sb.png'

    return prefix + hero.split(' ').join('_') + suffix
  },

  getHeroName: function (unlocalized) {
    var prefix = 'npc_dota_hero_'
    var underscored = unlocalized.slice(prefix.length)

    var tokens = underscored.split('_')
    for (var i = 0; i < tokens.length; i++) {
      tokens[i] = tokens[i].substr(0, 1).toUpperCase() +
        tokens[i].substr(1, tokens[i].length)
    }

    return tokens.join(' ')
  },

  getTeam: function (teamInt) {
    var team

    switch (teamInt) {
      case 2:
        team = 'radiant'
        break
      case 3:
        team = 'dire'
        break
    }

    return team
  }
}
