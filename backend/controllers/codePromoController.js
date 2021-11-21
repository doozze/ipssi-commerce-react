const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut, genericSelect} = require('./genericController');


module.exports = {
    readAllCodes: async (req, res, next) => {
        const sql = `Call selectPromoCodes()`;
        genericSelect(sql, res, next);
    }/*,
    createCode: async (req, res, next) => {

    },

    readCode: async (req, res, next) => {

    },

    deleteCode: async (req, res, next) => {

    },

    checkCode: async (req, res, next) => {

    },

    putCode: async (req, res, next) => {

    }*/

}