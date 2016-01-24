const expect = require('code').expect
const Lab = require('lab')
const lab = exports.lab = Lab.script()

const playerUtil = require('../../../server/lib/util/player')

lab.experiment('getHeroName', function () {
  lab.test('extract hero names', function (done) {
    var localized = playerUtil.getHeroName('npc_dota_hero_chaos_knight')

    expect(localized).to.equal('chaos_knight')

    done()
  })
})

lab.experiment('getHeroIcon', function () {
  lab.test('return cdn url', function (done) {
    var hero = 'earthshaker'

    expect(playerUtil.getHeroIcon(hero)).to
    .equal('http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_sb.png')

    done()
  })
})

lab.experiment('getTeam', function () {
  lab.test('translate team codes to teams', function (done) {
    var radiant = playerUtil.getTeam(2)
    var dire = playerUtil.getTeam(3)

    expect(radiant).to.equal('radiant')
    expect(dire).to.equal('dire')

    done()
  })
})
