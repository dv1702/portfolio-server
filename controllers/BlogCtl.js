const mysql = require('mysql2');
const db = require('../database/database');
const BlogService = require('../services/BlogService');

module.exports = class BlogCtl{
    static async apiGetAllBlogs(req, res){  
        console.log("blog route");
        let userId = await new Promise((resolve, reject)=>{
            let sql = 'select Id from user where Name=' + mysql.escape(req.params.user);
            db.query(sql, (err, res)=>{
                if(err){
                    console.log("id ki gadabad");
                }
                resolve(res);
            })
        })
        if(userId.length === 0){ 
            console.log("user not found");
        }
        let blogs = await BlogService.getAllBlogs(userId[0].Id);
        res.send(blogs);
    }
}