import {createRef} from "react";

function Form(props){
    let questionInput = createRef();
    let formRef = createRef();

    return(
        <form ref={formRef}>
            <input type="text" name="question" ref={questionInput}/>
            <button 
                type="submit" 
                onClick={(e)=> {
                    e.preventDefault();
                    props.onButtonClick(questionInput.current.value)
                    formRef.current.reset()
                }} 
            >Send</button>
        </form>
    )
}

export default Form; 