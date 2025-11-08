// Prerender configuration for better SEO
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'build'),
      routes: [
        '/',
        '/about',
        '/services', 
        '/consultation',
        '/contact',
        '/blog'
      ],
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: 'render-event',
        renderAfterTime: 5000,
        maxConcurrentRoutes: 4,
        injectProperty: '__PRERENDER_INJECTED',
        inject: {
          prerendered: true
        }
      }
    })
  ]
};
