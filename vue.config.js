module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        logLever: 'debug',
        pathRewrite: {'^/api': '/'},
      },
    }
  }
}
