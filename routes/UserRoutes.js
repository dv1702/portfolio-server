const express = require('express');
const router = express.Router();
const UserCtl = require('../controllers/UserCtl');

router.get('/:user', UserCtl.apiGetUserData);

module.exports = router;