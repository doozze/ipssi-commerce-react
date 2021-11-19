const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');


module.exports = {
    createCommande: async (req, res, next) => {
        const sql =`Call insertCommande(?,?,?)`;
        const {id_client, statut, id_codePromo} = req.body;
        genericPost(sql, [id_client, statut, id_codePromo], res, next);
    }, // récupérer lignes commandes depuis req.body => calcul montant

    readCommande: (req, res, next) => {
        const sql =`Call getCommande(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    },

    updateCommande :  (req, res, next) => {
        const sql = `Call updateCommande(?,?,?,?,?)`;
        const id = req.params.id;
        const {id_client, statut, montant, id_codePromo} = req.body;
        genericPut(sql, [id_client, statut, montant, id_codePromo, id], res, next)
    },

    deleteCommande :  (req, res, next) => {
        const sql =`Call deleteCommande(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    }

}