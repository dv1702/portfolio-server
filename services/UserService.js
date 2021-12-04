const mysql = require('mysql2');
const db = require("../database/database");
const BlogService = require('./BlogService');
const ComponentService = require('./ComponentService');

module.exports = class User{
    static async getUserData(userName){
        const components  = (await ComponentService.getComponents());
        let sql = 'select Details, Recent, Featured from user where Name=' + mysql.escape(userName);
        return new Promise((resolve, reject)=>{
            db.query(sql, (err, res)=>{
                 if(err){
                     console.log("User Details Fetch Problem!");
                 }
                 // what if user is not present 
                 components.map((navlink)=>{
                     navlink.url = navlink.url + "/" + userName;
                 })
                 if(res.length === 0){
                     resolve(-1);
                 }
                 resolve({
                     navbar: components,
                     userdata : res,
                 })
            })
        })
    }
}