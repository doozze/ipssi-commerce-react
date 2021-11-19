const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');


module.exports = {
    createLivraison: async (req, res, next) => {
        const {} = req.body;
        const sql =`Call insertLivraison(?,?,?,?,?,?)`;
        genericPost(sql, [], res, next);
    },

    readLivraison: (req, res, next) => {
        const sql =`Call getLivraison(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    },

    updateLivraison :  (req, res, next) => {
        const sql = `Call updateLivraison(?,?,?,?,?,?)`;
        const {} = req.body;
        const id = req.params.id;
        genericPut(sql, [], res, next);
    },

    deleteLivraison :  (req, res, next) => {
        const sql =`Call deleteLivraison(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next); 
    }

}