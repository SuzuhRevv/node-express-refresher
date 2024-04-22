const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('User hit the resource: Home Page')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    console.log('User hit the resource: About Page')
    res.status(200).send('About Page')
})

app.get('*', (req, res) => {
    console.log('Error')
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000')
})