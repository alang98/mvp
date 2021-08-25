const express = require("express");
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: false}));

app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});