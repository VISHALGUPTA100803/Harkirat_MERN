const express = require('express');
const app = express();

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username === 'admin' && password === 'admin') {
        res.send({
            status: 'success',
            message: 'Welcome to health checkup api'
        });
    }

});