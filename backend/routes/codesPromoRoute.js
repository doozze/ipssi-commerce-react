const router = require('express-promise-router')();

const { readAllCodes } = require('../controllers/codePromoController');


router.route('/')
    //.post(createCode)
    .get(readAllCodes);

router.route('/:id')
    //.get(readCode)
    //.put(putCode)
    //.delete(deleteCode);

router.route('/:code')
    //.get(checkCode);

module.exports = router;