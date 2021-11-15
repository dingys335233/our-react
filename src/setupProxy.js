/**
 * react proxy代理配置
 */
const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = function(app) {
  app.use(proxy('/api', {
    target: 'http://192.168.12.125',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }));
}
