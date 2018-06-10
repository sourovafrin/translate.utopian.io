import http from 'http';
import app from './app';
var https = require('https');

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/davinci.utopian.io/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/davinci.utopian.io/fullchain.pem'),
}

const port = process.env.PORT || '443';

const server = https.createServer(options, app);

let currentApp = app;

server.listen(port, () => console.log('SSR started'));

http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./app', () => {
    console.log('🔁  HMR Reloading `./app`...');
    server.removeListener('request', currentApp);
    const newApp = require('./app').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
