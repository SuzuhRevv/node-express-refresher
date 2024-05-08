const express = require('express')
const router = express.Router()

let { people } = require('../data')

const { getPeople, createPerson, createPostman, updatePerson, deletePerson } = require('../controllers/peopleController.js')


router.get('/', getPeople)
router.post('/api/people', createPerson)
router.post('/postman', createPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router