const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
  app.listen(8080);
});

