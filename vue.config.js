// vue.config.js
module.exports = {
  // vue项目中关闭eslint
  lintOnSave: false,
  publicPath: './',
  // webpack-dev-server 相关配置
  devServer: {
    // proxy: {
    //   '/dev-api': {
    //     target: 'https://localhost:8090', // 目标域名
    //     changeOrigin: true, // 更改请求头中的 Origin
    //     pathRewrite: {  //路径重写
    //       '^/dev-api': ''
    //     }
    //   },
    // },
  },
}
