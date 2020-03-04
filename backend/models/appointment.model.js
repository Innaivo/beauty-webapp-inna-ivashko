const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    date: {type: Date, required: true},
    service: {type: String, required: true, enum: ['Manicure', 'Manicure + Nail Polish', 
'Manicure + Gel Polish', 'Pedicure', 'Pedicure + Nail Polish', 'Pedicure + Gel Polish', 
'Men Haircut', 'Boys Haircut']},
    time: {type: Number, required: true},
    username: {type: String, required: true, min: 3},
    phone: {type: String, required: true, pattern: '^06*[0-9]{8}$'},
    email: {type: String, required: true}
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
