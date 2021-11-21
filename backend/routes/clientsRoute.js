const router = require('express-promise-router')();

const {readClient, createClient, updateClient, deleteClient, clientConnexion} = require('../controllers/clientController');

router.route('/')
    .post(createClient);

router.route('/:id')
   .get(readClient)
   .delete(deleteClient)
   .put(updateClient);

router.route('/pageConnexion')
    .post(clientConnexion);

module.exports = router;