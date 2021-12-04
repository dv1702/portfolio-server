const UserService = require('../services/UserService');

module.exports = class UserCtl{
    static async apiGetUserData(req, res){
        console.log("User route"); 
        let data = await UserService.getUserData(req.params.user);
        if(data === -1){
            console.log(data);
            res.send("error");
            
        }
        else{
        data.userdata[0].Details = (JSON.parse(data.userdata[0].Details));
        data.userdata[0].Featured = (JSON.parse(data.userdata[0].Featured));
        res.send(data);
        }
    }
}