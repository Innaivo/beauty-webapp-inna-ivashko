import express from 'express';
export const router = express.Router();

let Appointment = require('../models/appointment.model');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.json({ username: 'Flavio' });
// });

router.get('/', (req, res) => {
    Appointment.find()
      .then(appointments => res.json(appointments))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// router.get('/minutes/create', minutes_controller.minutesCreateGet);
// export const minutesCreateGet = (req, res, next) => {
//     async.parallel({
//       attendees: callback => Attendee.find(callback),
//       counts: viewCounts
//     }, (err, results) => {
//       if (err)
//         return next(err);
//       res.render('minutes_form', { title: 'Create Minutes',
//                                    attendee_list: results.attendees,
//                                    counts: results.counts});
//       });
//   };
// router.post('/minutes/create', minutes_controller.minutesCreatePost);


// router.route('/:id').get((req, res) => {
//     Exercise.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });