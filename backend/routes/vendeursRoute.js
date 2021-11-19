const router = require('express-promise-router')();

const { createVendeur, readVendeur, updateVendeur, deleteVendeur } = require('../controllers/vendeurController');

router.route('/')
    .post(createVendeur);

router.route('/:id')
    .get(readVendeur)
    .delete(deleteVendeur)
    .put(updateVendeur);

module.exports = router;