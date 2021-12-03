const express = require('express');
const mysql = require('mysql2');
const UserRoutes = require('./routes/UserRoutes');
const BlogRoutes = require("./routes/BlogRoutes");
const port = 8000;
const app = express();

app.use('/blog', BlogRoutes);
app.use('/', UserRoutes);

app.listen(port, () => {
    console.log("Bhai chal to raha hai ye...");
})