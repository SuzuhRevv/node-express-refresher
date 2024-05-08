const authUser = (req, res) => {
    const { name } = req.body
    console.log(req.body)
    if (name) {
        return res.status(200).send(`<h1>Hello ${name}, Welcome to our login page!</h1>`)
    }
    res.status(401).send('Please provide credentials')
}