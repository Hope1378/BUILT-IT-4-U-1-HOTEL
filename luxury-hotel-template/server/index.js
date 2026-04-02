const environment = require('./config/environment');
const app = require('./app');

app.listen(environment.port, () => {
  console.log('Aurelia server listening on port ' + environment.port);
});
