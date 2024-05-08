
const getPeople = (req, res) => {
    res.status(200).json({sucess: true, data: people}) //In this case i can use only people to return all the json data in my data.js or i can just pass some name : people 
}

const createPerson = (req, res) => {
    const {name} = req.body
    if (!name){
        return res.status(400).json({sucess: false, msg: 'please provide name value'})
    }
    res.status(201).json({})
}

const createPostman = (req, res) => {
    const { name } = req.body 
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide a name value'})
    }
    res.status(201).send( {sucess: true, data: [...people, name] })
}

const updatePerson =  (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => {
        return person.id === Number(id)
    })
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person found with the id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople})
}