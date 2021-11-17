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
        this.onChange(this.data)
        return question
    }
    
    getIndexById(id){
        return this.data.findIndex((question) => question.id === id)
    }

    vote(id){
        const index = this.getIndexById(id);
        const firstPart = this.data.slice(0, index);
        const secondPart = this.data.slice(index + 1, this.data.length);
        const questionVoted = this.data[index]

        this.data = [
            ...firstPart, 
            {
                ...questionVoted, 
                votes: questionVoted.votes + 1
            }, 
            ...secondPart
        ]
        this.onChange(this.data)
        return this.data[index]
    }

    addOnChangeListener(func){
        this.onChange = func
    }

    delete(id){
        const index = this.getIndexById(id);
        this.data.splice(index, 1)
    }
}

module.exports = Questions;