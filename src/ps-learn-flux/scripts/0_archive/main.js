// Import styles (automatically injected into <head>).
import '../styles/main.css';
// Import a logger for easier debugging.
import debug from 'debug';




// The logger should only be enabled if we’re not in production.
const log = debug('app:log');
if (ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
} else {
  debug.disable();
}



const printTarget = document.getElementById('userName');
const name = 'Senthil ....';
printTarget.innerText = `hello ${name}\n\n`;
