const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setWebScoket } = require('./webSocket');
const app = express();
const server = http.Server(app);

setWebScoket(server);

mongoose.connect('mongodb+srv://admin:admin@cluster0-pmqdy.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);
