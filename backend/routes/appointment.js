import express from 'express';
export const router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.json({ username: 'Flavio' });
// });

router.post('/', function(req, res) {
    return res.json({
        success:true
    })
});
