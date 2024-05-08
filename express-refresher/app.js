const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')


app.use(express.urlencoded({ extended: false }))
app.use(express.static('./methods-public/'))
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/', authRouter)

app.listen(5000, () => {
    console.log('listening on port 5000...')
});

