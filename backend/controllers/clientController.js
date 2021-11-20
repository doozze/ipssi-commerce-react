const { restart } = require('nodemon');
const pool = require('../config/database');

const { genericPost, genericGetDelete, genericPut } = require('./genericController');


module.exports = {
    createClient : async(req,res, next) => {
        const {nom, prenom, mail, id_addresse, tel, password} = req.body;
        const sql =`Call insertClient(?,?,?,?,?,?)`;
        genericPost(sql, [nom, prenom, mail, id_addresse, tel, password], res, next);
    },

    readClient : async(req,res,next) => {
        const sql =`Call getClient(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
    },

    updateClient : async(req,res,next) => {
        const sql = `Call updateClient(?,?,?,?,?,?)`;
        const {nom, prenom, mail, tel, password} = req.body;
        const id = req.params.id;
        genericPut(sql, [nom, prenom, mail, tel, password, id], res, next);
    },

    deleteClient : async(req,res,next) => {
        const sql =`Call deleteClient(?)`;
        const id = req.params.id;
        genericGetDelete(sql, id, res, next);
        
    },

    clientConnexion : async(req, res, next) => {
        const sql = 'Call connexionClient(?,?)';
        const {mail, password} = req.body;
        console.log("aaaaaaaaa");
        genericPost(sql, [mail, password], res, next);
    }
}