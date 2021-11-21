const router = require('express-promise-router')();

const {createProduct, readProduct, readAllProducts, updateProduct, deleteProduct} = require('../controllers/produitController');

router.route('/')
    .post(createProduct)
    .get(readAllProducts);

router.route('/:id')
    .get(readProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;