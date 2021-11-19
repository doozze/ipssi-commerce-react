const router = require('express-promise-router')();

const {createProduit, readProduit, readAllProduits, updateProduit, deleteProduit} = require('../controllers/produitController');

router.route('/')
    .post(createProduit)
    .get(readAllProduits);

router.route('/:id')
    .get(readProduit)
    .put(updateProduit)
    .delete(deleteProduit);

module.exports = router;