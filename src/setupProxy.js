import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gameinfo.albiononline.com',
      changeOrigin: true,
    })
  );
}
