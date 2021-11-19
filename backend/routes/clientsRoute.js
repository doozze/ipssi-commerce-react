const router = require('express-promise-router')();

const {readClient, createClient, updateClient, deleteClient} = require('../controllers/clientController');

router.route('/')
    .post(createClient);

router.route('/:id')
   .get(readClient)
   .delete(deleteClient)
   .put(updateClient);

module.exports = router;