const express = require('express');
const router = express.Router();
const BlogCtl = require('../controllers/BlogCtl');

router.get('/:user', BlogCtl.apiGetAllBlogs);

module.exports = router;