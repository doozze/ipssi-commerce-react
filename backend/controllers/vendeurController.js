const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');


module.exports = {
    createVendeur: async (req, res, next) => {
        const {} = req.body;
        const sql =`Call insertVendeur(?,?,?,?,?,?)`;
        genericPost(sql, [], res, next);
    },

    readVendeur: (req, res, next) => {
        const sql =`Call getVendeur(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    },

    updateVendeur :  (req, res, next) => {
        const sql = `Call updateVendeur(?,?,?,?,?,?)`;
        const {} = req.body;
        const id = req.params.id;
        genericPut(sql, [], res, next);
    },

    deleteVendeur :  (req, res, next) => {
        const sql =`Call deleteVendeur(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next); 
    }

}