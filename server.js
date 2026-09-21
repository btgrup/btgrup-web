// cPanel / Plesk Node.js Selector ve Özel Sunucu Başlatıcı
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Sunucu istek hatası:', req.url, err);
      res.statusCode = 500;
      res.end('İç Sunucu Hatası');
    }
  }).listen(port, () => {
    console.log(`> Btgrup web sitesi aktif: http://${hostname}:${port}`);
  });
});
