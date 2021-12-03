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
                 res[0].Details = JSON.parse(res[0].Details);
                 res[0].Featured = JSON.parse(res[0].Featured);
                 console.log(res[0].Details);
                 resolve({
                     navbar: components,
                     userdata : res,
                 })
            })
        })
    }
}