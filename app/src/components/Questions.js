function Questions(props){
    return(
        <ul>
            {props.data.map(({question, id})=>{
                return <li key={id}>{question}</li>
            })
            }
        </ul>
    ) 
}

export default Questions;
