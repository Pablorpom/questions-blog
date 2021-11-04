const express = require('express')
const bodyParser = require('body-parser');
const getRandomId = require('./utils/getRandomId')
const app = express()
const port = 3000

app.use(bodyParser.json());

const questions = []

app.get('/questions', (req, res) => {
    res.send(questions)
})

app.get('/questions/:id', (req, res) => {
    const filteredById = questions.find(question => question.id === Number(req.params.id))
    res.send(filteredById)
})

app.post('/questions', (req, res) => {
    const question = {
        ...req.body,
        id: getRandomId(),
        votes: 0
    }
    questions.push(question)
    res.send(question)
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})