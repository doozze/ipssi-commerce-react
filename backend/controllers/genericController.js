const pool = require('../config/database');

module.exports = {
    genericPost : async(sql, body, res, next) => { // recupérer id dans les posts
        let connexion = await pool.getConnection();
        console.log("aaaaaaa");
        try {
            const result = await connexion.query(sql,body);
            return res.status(200).json({success: result});
        }
        catch (error){    
            return res.status(400).json({error: error.message});
            next();
        }
        finally {
            if(connexion)
                connexion.end();
        }
    },
    genericGetDelete : async(sql, id, res, next) => {
        let connexion = await pool.getConnection();
        try {
            const result = await connexion.query(sql,id);
            return res.status(200).json({success: result});
        }
        catch (error){    
            return res.status(400).json({error: error.message});
            next();
        }
        finally {
            if(connexion)
                connexion.end();
        }
    }, 

    genericPut : async(sql, bodyWithId, res, next) => { // récupérer id dans put
        let connexion = await pool.getConnection();
        try {
            const result = await connexion.query(sql,bodyWithId);
            return res.status(200).json({success: result});
        }
        catch (error){    
            return res.status(400).json({error: error.message});
            next();
        }
        finally {
            if(connexion)
                connexion.end();
        }
    },

    genericSelect: async(sql, res, next) => { // récupérer id dans put
        let connexion = await pool.getConnection();
        try {
            const result = await connexion.query(sql);
            return res.status(200).json({success: result});
        }
        catch (error){
            return res.status(400).json({error: error.message});
            next();
        }
        finally {
            if(connexion)
                connexion.end();
        }
    }
}