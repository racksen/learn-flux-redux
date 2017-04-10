import debug from 'debug';

export function init(){
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
}

export function getDebug(name){
    return debug(name);
}