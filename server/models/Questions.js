const getRandomId = require('../utils/getRandomId')

class Questions {
    constructor(data = []){
        this.data = data;
    }
    getAll(){
        return this.data
    }
    getById(id){
        return this.data.find(question => question.id === id)
    }
    create(obj){
        const question = {
            ...obj,
            id: getRandomId(),
            votes: 0
        }
        this.data.push(question)
        return question
    }
    vote(id){
        const obj = this.getById(id);
        obj.votes += 1
    }
}

module.exports = Questions;