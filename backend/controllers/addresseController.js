const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');

module.exports = {
    createAddresse: async (req, res, next) => {
        const sql =`Call insertAddresse(?,?,?,?,?)`;
        const {numero, nomVoie, codePostal, ville, note} = req.body;
        genericPost(sql, [numero, nomVoie, codePostal, ville, note], res, next);
    },

    readAddresse: (req, res, next) => {
        const sql =`Call getAddresse(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    },

    updateAddresse:  (req, res, next) => {
        const sql = `Call updateAddresse(?,?,?,?,?,?)`;
        const id = req.params.id;
        const {numero, nomVoie, codePostal, ville, note} = req.body;
        genericPut(sql, [numero,nomVoie, codePostal, ville, note, id], res, next)
    },

    deleteAddresse:  (req, res, next) => {
        const sql =`Call deleteAddresse(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    }

}