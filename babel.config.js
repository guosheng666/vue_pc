/**
 * @author gs
 * @description  初始化node服务
 * **/
const server = require('./src/serve/index')
server.init()
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
