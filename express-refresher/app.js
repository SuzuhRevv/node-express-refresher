const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])
app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about/', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
}) 

app.get('/about/:nomeDoUsuario', (req, res) => {
    console.log(req.params);
    res.send('About id');
    const { nomeDoUsuario: nome } = req.params;
    console.log(nome);
});

app.listen(5000, () => {
    console.log('listening on port 5000...');
});

module.exports = logger;
