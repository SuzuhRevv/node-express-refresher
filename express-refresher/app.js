const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('user hits the server',res.method, res.body)
})

server.listen(3000, console.log('listening on port 3000'))