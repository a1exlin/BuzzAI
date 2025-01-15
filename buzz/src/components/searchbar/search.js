import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Bulma from 'bulma';


function Searchbar({ questions, onAnswer }) {
    //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    //   const currentQuestion = questions[currentQuestionIndex] ;

    //   const handleAnswer = (answer) => {
    //     onAnswer(answer);
    //     if (currentQuestionIndex < questions.length - 1) {
    //       setCurrentQuestionIndex(currentQuestionIndex + 1);
    //     }
    //   };
    return (

        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
            />
            <input
                class="input is-primary"
                type="text"
                placeholder="Primary input"
            />
        </div>
    );

}

export default Searchbar;