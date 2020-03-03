import React, { Component } from 'react';
// import {router as lalaRouter} from './routes/lala';
import {router as appointmentRouter} from './routes/appointment';
import express from 'express';
import path from 'path';
import axios from 'axios';
const publicPath = path.join(__dirname, '../build');

const app = express();
app.use(express.static(publicPath));
app.use('/appointment', appointmentRouter);
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

   // componentDidMount () {
   //    axios
   //    .get('/lala')
   //    .then(res => console.log(res.data));
   // };

module.exports = app;