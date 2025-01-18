import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

function Searchbar() {
    const [question, setQuestions] = useState("");
    const [answer, setAnswers] = useState("");

    const getAnswer = () => {
        const lowerCaseQuestion = question.toLowerCase();
        // Define answers for some common questions
        const answers = {
            "how are you?": "I'm just a AI, humans programmed me to say I am doing great!",

        }
        
        // checks if the question exist in the answers
        if (answers[lowerCaseQuestion]) {
            setAnswers(answers[lowerCaseQuestion]);
        }
        else {
            setAnswers("Sorry, I dont know to the answer to that. I can give you other helpful links to be sucessful at Ga Tech!")
        }
        setQuestions("");
        console.clear();
        console.log("Question:",question);
        console.log("Answer:",answer);
      
    }

    //enter works for questions
    const handleKeyDown = (event) =>{
        if(event.key == "Enter") {
            getAnswer();
        }
      }  
    
    return (
        <div className='container'>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
            />
            <input
                class="input is-primary"
                type="text"
                placeholder="Ask a Question Yellow Jacket?"
                value={question}
                onChange={(e)=>{setQuestions(e.target.value)}}
                onKeyDown={handleKeyDown} // listen for keypress
            />
            <button onClick={getAnswer} class="button is-primary" style={{fontSize:"1rem", marginTop:"20px"}}>click me!</button>
            <p className='container-2'>{answer}</p>
        </div>
    );

}

export default Searchbar;
