const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGO = require('./const');
const router = require('./routes/movies');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());

mongoose.connect(MONGO.URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Db Connected'))
    .catch((err) => console.log(err));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server up, listen port: ${PORT}`);
});
