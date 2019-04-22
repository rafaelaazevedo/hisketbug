export default class Utils {
  constructor () {
    const args = require('yargs').argv
    const config = require('../../envs/config.json')
    this.env = args.ENV
    this.baseUrl = config[this.env].host
  }
}
