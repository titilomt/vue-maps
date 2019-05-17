module.exports = {
  devServer: {
    clientLogLevel: 'info',
    port: '4010',
    host: '192.168.122.82',
    proxy: 'http://192.168.122.82:4010'
  }
};