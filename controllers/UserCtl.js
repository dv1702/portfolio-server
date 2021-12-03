const UserService = require('../services/UserService');

module.exports = class UserCtl{
    static async apiGetUserData(req, res){ 
        let data = await UserService.getUserData(req.params.user);
        res.send(data);
    }
}