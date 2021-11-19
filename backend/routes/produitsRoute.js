const router = require('express-promise-router')();

const {createProduit, readProduit, updateProduit, deleteProduit} = require('../controllers/produitController');

router.route('/')
    .post(createProduit);

router.route('/:id')
    .get(readProduit)
    .put(updateProduit)
    .delete(deleteProduit);

module.exports = router;