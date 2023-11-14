const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/trajets/', // Cette valeur doit correspondre à l'URL de votre backend
    createProxyMiddleware({
      target: 'http://localhost:8080', // L'URL de votre backend local
      changeOrigin: true, // Permet de gérer les en-têtes CORS
    })
  );
};