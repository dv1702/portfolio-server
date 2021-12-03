const mysql = require('mysql2');
const db = require('../database/database');

module.exports = class BlogService{
    static async getAllBlogs(userId){
        return new Promise((resolve, reject)=>{
            let sql = 'select Title,Date,Description,Topic from blog where UserId='+mysql.escape(userId);
            db.query(sql, (err, res)=>{
                if(err){
                    console.log("Blog me gadabad");
                }
                resolve(res)
            })
        })
    }
}