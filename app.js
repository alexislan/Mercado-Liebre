const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = process.env.PORT || 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
}) 
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
}) 
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
}) 
app.listen(puerto, () => {
    console.log('Aplicación esuchando en puerto 3001');
});


