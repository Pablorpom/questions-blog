const Questions = require('./Questions')

describe('Questions', ()=>{
    
    let questions;
    let question;
    
    beforeEach(()=>{
        questions = new Questions();
        question = questions.create({question: "What?"})
    });
    
    it('Should get all the questions', ()=>{
        expect(questions.getAll()).toBe(questions.data)
    });
    
    it('Should get question by id', ()=>{
        expect(questions.getById(question.id)).toBe(question)
    });
    
    it('Should create a new question', ()=>{
        const question2 = questions.create({question: "Why?"})
        expect(questions.getAll().length).toBe(2);
        expect(questions.getById(question2.id).question).toBe("Why?")
        expect(questions.getById(question2.id).votes).toBe(0)
    });

    it('Should add 1 vote to the object brought by getById', ()=>{
        questions.vote(question.id)
        expect(questions.getById(question.id).votes).toBe(1)
    })
})
