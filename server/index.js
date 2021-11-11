const express = require('express')
const bodyParser = require('body-parser');
const Questions = require('./models/Questions')
const app = express()
const port = 3000

app.use(bodyParser.json());

const questions = new Questions();

app.get('/questions', (req, res) => {
    res.send(questions.getAll())
});

app.get('/questions/:id', (req, res) => {
    res.send(questions.getById(req.params.id))
});

app.post('/questions', (req, res) => {
    res.send(questions.create(req.body))
});

app.put('/questions/:id', (req, res) => {
    res.send(questions.vote(req.params.id))
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
