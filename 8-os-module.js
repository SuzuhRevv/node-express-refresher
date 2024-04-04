const os = require('os')

console.log(`The system uptime is ${os.uptime()} seconds`)

const user = os.userInfo()
console.log(user)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)