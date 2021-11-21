const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut, genericSelect} = require('./genericController');


module.exports = {
    createProduct: async (req, res, next) => {
       const sql = `call insertProduit(?,?,?,?,?,?)`;
       const {name, price, details, photo, note, stocks, vendorId} = req.body;
       genericPost(sql, [name, price, details, photo, note, stocks, vendorId], res, next);
    },

    readProduct: async (req, res, next) => {
       const id = req.params.id;
       const sql = `Call getProduit(?)`;
       genericGetDelete(sql, id, res, next);
    },

    readAllProducts: async (req, res, next) => {
        const sql = `Call selectPromoCode()`;
        genericSelect(sql, res, next)
    },

    updateProduct : async (req, res, next) => {
        const id = req.params.id; 
        const sql = ``;
        const {name, price, details, photo, note, stock, vendorId} = req.body;
        genericPut(sql, [name, price, details, photo, note, stock, vendorId, id], res, next);
    },

    deleteProduct : async (req, res, next) => {
        const id = req.params.id; 
        const sql = `Call deleteProduit(?)`;
        genericGetDelete(sql, id, res, next);

    }

}