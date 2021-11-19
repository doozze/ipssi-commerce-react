const router = require('express-promise-router')();

const {createAddresse, deleteAddresse, updateAddresse, readAddresse } = require('../controllers/addresseController');

router.route('/')
    .post(createAddresse);

router.route('/:id')
    .get(readAddresse)
    .delete(deleteAddresse)
    .put(updateAddresse);

module.exports = router;