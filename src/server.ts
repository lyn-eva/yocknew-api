import { Express } from 'express';
const express = require('express');

const app: Express = express();

require('./api/routes/index.routes')(app); // routes

app.listen(process.env.PORT ?? 5000);
