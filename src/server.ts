import { Express } from 'express';
const express = require('express');

const app: Express = express();

app.use((req, res) => res.send('nodemon ts-node').end());

app.listen(process.env.PORT ?? 5000);
