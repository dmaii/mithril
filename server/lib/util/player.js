module.exports = {
  getHeroIcon: function (hero) {
    var prefix = 'http://cdn.dota2.com/apps/dota2/images/heroes/'
    var suffix = '_sb.png'

    return prefix + hero.split(' ').join('_') + suffix
  },

  getHeroName: function (unlocalized) {
    var prefix = 'npc_dota_hero_'
    return unlocalized.slice(prefix.length)
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
