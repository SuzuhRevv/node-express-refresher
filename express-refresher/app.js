const express = require('express');
const app = express();
let { people } = require('./data')
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('./methods-public/'))
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({sucess: true, data: people}) //In this case i can use only people to return all the json data in my data.js or i can just pass some name : people 
})
app.post('/api/people', (req, res) => {
    const {name} = req.body
    if (!name){
        return res.status(400).json({sucess: false, msg: 'please provide name value'})
    }
    res.status(201).json({})
})

app.post('/login', (req, res) => {
    const { name } = req.body
    console.log(req.body)
    if (name) {
        return res.status(200).send(`<h1>Hello ${name}, Welcome to our login page!</h1>`)
    }
    res.status(401).send('Please provide credentials')
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => {
        return person.id === Number(id)
    })
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person found with the id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => {
        return person.id === Number(req.params.id)
    })
    if (!person) {
        return res.status(404).json({ sucess: false, msg: `no person found with the id ${id}` })
    }
    const newPeople = people.filter((person) => {
        return person.id !== Number(req.params.id)
    })
    return res.status(200).json( {success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('listening on port 5000...');
});

