import {router as appointmentRouter} from './routes/appointment';
import express from 'express';
import path from 'path';
//const publicPath = path.join(__dirname, '../build');

const app = express();
//app.use(express.static(publicPath));
app.use('/lala', (req,res) => res.json({message: "Hello Inna"}));
app.use('/appointment', appointmentRouter);

// app.get('*', (req, res) => {
//    res.sendFile(path.join(publicPath, 'index.html'));
// });

module.exports = app;