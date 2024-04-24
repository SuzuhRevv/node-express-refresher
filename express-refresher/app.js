const express = require('express');
const app = express();
let { people } = require('./data')

app.use(express.static('./methods-public/'))

app.get('/api/people', (req, res) => {
    res.status(200).json({sucess: true, data: people}) //In this case i can use only people to return all the json data in my data.js or i can just pass some name : people 
})



app.listen(5000, () => {
    console.log('listening on port 5000...');
});

