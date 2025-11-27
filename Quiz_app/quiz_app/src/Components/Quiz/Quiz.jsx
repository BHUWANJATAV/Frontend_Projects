import React, { useState, useRef } from 'react'
import './Quiz.css'
import {data} from '../../assets/data';
const Quiz = () => {

    let [index,setIndex] = useState(0);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];

    const checkAns = (e,ans) =>{
        if (lock === false) {
            if (question.ans===ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(score + 1);
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
    }

    const nextQuestion = () => {
        if (index < data.length - 1) {
            // Remove classes from options
            option_array.forEach(opt => {
                if (opt.current) {
                    opt.current.classList.remove("correct", "wrong");
                }
            });
            setIndex(index + 1);
            setLock(false);
        }
    }

    const resetQuiz = () => {
        // Remove classes from options
        option_array.forEach(opt => {
            if (opt.current) {
                opt.current.classList.remove("correct", "wrong");
            }
        });
        setIndex(0);
        setScore(0);
        setLock(false);
    }

    const question = data[index];

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{index+1}. {question.question}</h2>
            <ul>
                <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
            </ul>
            {index < data.length - 1 && (
                <button onClick={nextQuestion}>Next</button>
            )}
            <div className='index'>{index+1} of {data.length} questions</div>
            {index === data.length - 1 && (
                <h2>You Scored {score} out of {data.length}</h2>
            )}
            <button onClick={resetQuiz}>Reset</button>
        </div>
    )
}

export default Quiz

// import React, { useState } from 'react';

// function Quiz() {
//   const [message, setMessage] = useState('');

//   const question = {
//     text: "India ka capital kya hai?",
//     options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
//     correctAnswer: "Delhi"
//   };

//   const checkAnswer = (selectedOption) => {
//     if (selectedOption === question.correctAnswer) {
//       setMessage("✅ Correct!");
//     } else {
//       setMessage("❌ Wrong!");
//     }
//   };
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h2>Simple Quiz</h2>
//       <p>{question.text}</p>
//       {question.options.map((option, index) => (
//         <button
//           key={index}
//           onClick={() => checkAnswer(option)}
//           style={{ margin: '5px', padding: '10px' }}
//         >
//           {option}
//         </button>
//       ))}
//       <p style={{ fontWeight: 'bold', marginTop: '20px' }}>{message}</p>
//     </div>
//   );
// }

// export default Quiz;