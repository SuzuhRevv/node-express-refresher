const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{ 
    const url = req.url
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        console.log(req.method)
        res.write(homePage)
        res.end()
    } else if (url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    } else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        console.log(req.method)
        res.write(homeLogo)
        res.end()
    } else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        console.log(req.method)
        res.write(homeLogic)
        res.end()
    } else if (url === '/about.html'){
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