const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    service: {type: String, required: true, enum: ['Manicure', 'Manicure + Nail Polish', 
'Manicure + Gel Polish', 'Pedicure', 'Pedicure + Nail Polish', 'Pedicure + Gel Polish', 
'Men Haircut', 'Boys Haircut']},
    date: {type: Date, required: true},
    username: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    remark: {type: String}
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
