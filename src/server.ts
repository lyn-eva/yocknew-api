import type { Express } from 'express';
const express = require('express');

const app: Express = express();

app.use(express.json()); // parse JSON body

require('./api/routes/index.route')(app); // routes

app.listen(process.env.PORT ?? 5000);
