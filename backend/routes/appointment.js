import express from 'express';
export const router = express.Router();

let Appointment = require('../models/appointment.model.js');

router.post('/', (req, res, next) => {
    console.log(JSON.stringify(req.body));
            let appointment = new Appointment(
                { date: req.body.date,
                  service: req.body.service,
                  time: req.body.time,
                  username: req.body.username,
                  phone: req.body.phone,
                  email: req.body.email,
                  remark: req.body.remark
                });
            appointment.save(err =>
                {if (err)
                     return next(err)});
     return res.json({success:true});
});
