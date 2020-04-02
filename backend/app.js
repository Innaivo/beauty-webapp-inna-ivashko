import {router as appointmentRouter} from './routes/appointment';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();

var dev_db_url = 'mongodb+srv://Innadb:August@2019@cluster0-73lcp.azure.mongodb.net/appointment_beauty?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/appointment', appointmentRouter);

if (process.env.NODE_ENV === "production"){
    const publicPath = path.join(__dirname, '../frontend/build');
    app.use(express.static(publicPath));
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });
}

module.exports = app;

