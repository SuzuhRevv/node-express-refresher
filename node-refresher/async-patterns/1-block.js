const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    } else if (req.url === '/about') {
        //BLOCKING CODE!
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`this is i: ${i} and that is j: ${j}`)
            }
        }
        res.end('About Page')
    } else {
        res.end('Error Page')
    }

})

server.listen(5000, () => {
    console.log('Server listening on port: 5000....')
})