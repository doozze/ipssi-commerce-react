const router = require('express-promise-router')();

const {createCommande, readCommande, updateCommande, deleteCommande} = require('../controllers/commandeController');

router.route('/')
    .post(createCommande);

router.route('/:id')
    .get(readCommande)
    .put(updateCommande)
    .delete(deleteCommande);

module.exports = router;