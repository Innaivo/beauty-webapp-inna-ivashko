import express from 'express';
export const router = express.Router();

let Appointment = require('../models/appointment.model.js');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.json({ username: 'Flavio' });
// });

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
            // console.log(appointment);
            appointment.save(err =>
                {if (err)
                     return next(err)});
     return res.json({success:true});
});
