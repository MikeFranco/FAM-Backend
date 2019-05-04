const app = require('express')();
const bodyParser = require('body-parser');

//Rutas
//const moneyMethods = require('./src/save-money-methods/money-methods');
const methods = require('./functions/index');

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.send(`Backend Levantado en el puerto ${port}`));

app.route('/methods')
  .post(methods.addUser)

app.listen(port, () => console.log(`Corriendo FAM Backend en el puerto: ${port}`));

module.exports = { app };