const getRandomId = require('../utils/getRandomId')

class Questions {
    constructor(data = []){
        this.data = data;
    }
    getAll(){
        return this.data
    }
    getById(id){
        return this.data.find(question => question.id === Number(id))
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
}

module.exports = Questions;