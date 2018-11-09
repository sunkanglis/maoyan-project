
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer:{
      port:8000,
      proxy:{
        '/my':{
          target:'http://m.maoyan.com',
          changOrigin:true,
          pathRewrite : {
            '^/my' : ''
          }
        },
        '/logins':{
            target:'https://i.meituan.com',
            changOrigin:true,
            pathRewrite : {
              '^/logins' : ''
            }
        }
      }
    },
    chainWebpack  (config)  { // 起别名，来确保模块引入变得更简单
        config
            .resolve
            .alias
            .set('@lib', resolve('src/lib'))
            .set('@styles',resolve('src/css'))
            .set('@c',resolve('src/components'))
            .set('@views',resolve('src/views'))
            .set('@util',resolve('src/util'))
             
             
     }
  }