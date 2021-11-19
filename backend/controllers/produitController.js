const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');


module.exports = {
    createProduit: async (req, res, next) => {
       const sql = `call insertProduit(?,?,?,?,?,?)`;
       const {name, price, details, photo, note, stocks, vendorId} = req.body;
       genericPost(sql, [name, price, details, photo, note, stocks, vendorId], res, next);
    },

    readProduit: async (req, res, next) => {
       const id = req.params.id; 
       const sql = `Call getProduit(?)`;
       genericGetDelete(sql, id, res, next);

    },

    updateProduit : async (req, res, next) => {
        const id = req.params.id; 
        const sql = ``;
        const {name, price, details, photo, note, stock, vendorId} = req.body;
        genericPut(sql, [name, price, details, photo, note, stock, vendorId, id], res, next);
    },

    deleteProduit : async (req, res, next) => {
        const id = req.params.id; 
        const sql = `Call deleteProduit(?)`;
        genericGetDelete(sql, id, res, next);

    }

}