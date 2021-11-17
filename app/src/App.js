import {useEffect, useState} from 'react'
import axios from 'axios'
import Form from './components/Form';
import Questions from './components/Questions'
import {questionsURL} from './constants'

function App() {
  
  const [questions, setQuestions] = useState([])
  
  const fetchData = async ()=>{
    const {data} = await axios.get(questionsURL)
    setQuestions(data)
  }
  
  const onSendButtonClick = async (question)=>{
    await axios.post(questionsURL,{
      question
    })
    fetchData();
  }

  const onVoteButtonClick = async (id)=>{
    await axios.put(`${questionsURL}/${id}`);
    fetchData();
  }
  
  useEffect(()=>{
    fetchData();
  }, [])
  
  return (
    <>
    <Form onSendButtonClick={onSendButtonClick} />
    <Questions data={questions} onVoteButtonClick={onVoteButtonClick} />
    </>
    )
  }
  
  export default App;
  
  // const fetchData = async ()=>{
  //   const data = await fetch(questionsURL)
  //   const parsedData = await data.json()
  //   setQuestions(parsedData)
  // }
  
  // const onSendButtonClick = async (question)=>{
  //   await fetch(questionsURL, {
  //     method: 'POST',
  //     body: question
  //   })
  //   fetchData();
  // }
  
  
  
  
  // useEffect(()=>{
  //   axios.get('questionURL')
  //     .then((res)=>{
  //       console.log(res.data)
  //     })
  // })