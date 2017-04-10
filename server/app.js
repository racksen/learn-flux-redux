'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var hbs = _interopDefault(require('hbs'));

const app = express();

app.set('view engine', 'html');
app.set('views', './dist');

app.engine('html', hbs.__express);
app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.render('index', {});
});

app.listen(3000, function () {
  console.log('Learn-rollup app started at http://localhost:3000/'); // eslint-disable-line no-console
});
