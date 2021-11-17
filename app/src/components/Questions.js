function Questions(props){
    return(
        <div>
            {props.data.map(({question, id, votes})=>{
                return(
                    <div key={id}>
                        <div>{question}</div>
                        <div>Votes: {votes}</div>
                        <button onClick={()=>{
                            props.onVoteButtonClick(id)
                            }
                        }>vote</button>
                        <button onClick={()=>{
                            props.onDeleteButtonClick(id)
                            }
                        }>Delete</button>
                    </div>
                )
            })
            }
        </div>
    ) 
}

export default Questions;
