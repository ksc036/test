const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: false, // HTTPS 사용하지 않도록 설정
  },
})
