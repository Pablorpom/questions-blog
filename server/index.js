const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const Questions = require('./models/Questions')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());

const questions = new Questions();
questions.addOnChangeListener((data)=>{
    console.log(data);
})

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
