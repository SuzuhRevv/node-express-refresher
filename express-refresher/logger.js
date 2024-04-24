const logger = (req, res, next) => {
    const method = req.method
    const url = req.url 
    const query = req.query
    const time = new Date().getFullYear()
    console.log(method, url, time, query)
    next()
}

module.exports = logger