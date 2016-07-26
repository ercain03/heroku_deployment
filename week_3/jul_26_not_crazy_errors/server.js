const app = require('express')();
const jsonParser = require('body-parser').json();

app.post('/somejson', jsonParser, (req, res) => {
  res.send(req.body);
});

app.use((err, req, res, next) => {
  debugger;
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(3000, () => console.log('server up'));
