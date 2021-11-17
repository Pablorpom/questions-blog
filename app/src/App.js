import {useEffect, useState} from 'react'
// import axios from 'axios'
import Form from './components/Form';
import Questions from './components/Questions'
import {questionsURL} from './constants'

function App() {

  const [questions, setQuestions] = useState([])

  const fetchData = async ()=>{
    const data = await fetch(questionsURL)
    const pasedData = await data.json()
    setQuestions(pasedData)
  }
  
  const onButtonClick = async (question)=>{
    await fetch(questionsURL,{
      method: 'POST',
      body: question
    })
    fetchData();
  }
  
  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <>
      <Form onButtonClick={onButtonClick} />
      <Questions data={questions} />
    </>
  )
}

export default App;

  // const fetchData = async ()=>{
  //     const {data} = await axios.get(questionsURL)
  //     setQuestions(data)
  //   }
    
  //   const onButtonClick = async (question)=>{
  //     await axios.post(questionsURL,{
  //       question
  //     })
  //     fetchData();
  //   }

   // useEffect(()=>{
  //   axios.get('questionURL')
  //     .then((res)=>{
  //       console.log(res.data)
  //     })
  // })