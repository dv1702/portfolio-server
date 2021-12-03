const mysql = require('mysql2');
const db = require('../database/database');

module.exports = class ComponentService{
    static async getComponents(){
        let sql = 'select Name, Data from component;'
        return new Promise((resolve, reject)=>{
            db.query(sql, (err, res)=>{
                if(err){
                    throw err;
                }
                else{
                    resolve(JSON.parse(res[0].Data));
                }
            })
        })
    }
}