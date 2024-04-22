const express = require('express')
const app = express()

const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => { 
    const {id, name, image} = product
    return {id, name, image}
})
    res.json(newProducts)
})
app.get('/api/products/:productId', (req, res) => {
    console.log(req)
    console.log(req.params)
    const {productId} = req.params
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send('<h1>Product does not exist</h1>')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello world')
})

app.listen(5000, ()=> {
    console.log('listening on port 5000...')
})