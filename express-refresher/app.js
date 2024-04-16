const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res)=>{ 
    const url = req.url
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        console.log(req.method)
        res.write(homePage)
        res.end()
    } else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        console.log(req.method)
        res.write(`<h1>This is my About Page o/, i'm currently hosting in the following url: ${req.headers.host}</h1>`)
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`Page not Found!`)
        res.end()

    }

        
    res.end()
})

server.listen(3000, () => console.log('listening on port 3000'))