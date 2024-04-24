const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'suzuhrevv') {
        req.user = {name: 'suzuhrevv', id: 3}
        console.log('Authorized')
        next()
    } else {
        res.status(401).send('Unauthorized')
        console.log('Unauthorized!')
    }
}

module.exports = authorize