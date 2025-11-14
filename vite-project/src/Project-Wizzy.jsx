// // Project: Build Wizzy, A Mini-Quiz App
// To solidify this knowledge,  build a Mini-Quiz App.
// Project Requirements:
// Quiz Data: Hardcode an array of 5 questions. Each question object should contain: Done
// id
// question
// options (an array of strings)
// answer (the index of the correct option)

// State Management (useState): Done
// Track the current question index.
// Track the user's score.
// Track whether the quiz is finished (a boolean).

// Rendering Lists (map & key):
// Use map to display the options for the current question as a list of buttons.

// Events:
// Add an onClick event handler to each answer button.
// This handler should check if the selected answer is correct, update the score state accordingly, and increment the question index.

// Conditionals:
// Use conditional rendering to show one of two main views:
// Quiz View: (If quizFinished is false, display the current question and answer buttons).
// Results View: (If quizFinished is true, display the final score and a "Restart Quiz" button).
// useEffect (Bonus):
// Use useEffect with the questionIndex as a dependency to log the question number to the console every time a new question is rendered.

import { useState } from 'react'
let questionList = [];
function ProjectWizzy() {
    questionList = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: 2
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: 1
        }, 
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: 3
        },
        {
            id: 4,
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            answer: 1
        },
        {
            id: 5,
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: 0
        }
    ]
    let [questionIndex, setQuestionIndex] = useState(0);
    let [score, setScore] = useState(0);
    let [quizFinished, setQuizFinished] = useState(false);
    return (
        <>
            <div>
                {!quizFinished ? (
                    <div>
                        <h2>{questionList[questionIndex].question}</h2>
                        {questionList[questionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => {
                                if (index === questionList[questionIndex].answer) {
                                    setScore(score + 1);
                                }
                                if (questionIndex + 1 < questionList.length) {
                                    setQuestionIndex(questionIndex + 1);
                                } else {
                                    setQuizFinished(true);
                                }
                            }}>{option}</button>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>Your Score: {score} out of {questionList.length}</h2>
                        <button onClick={() => {
                            setQuestionIndex(0);
                            setScore(0);
                            setQuizFinished(false);
                        }}>Restart Quiz</button>
                    </div>
                )}
            </div>

        </>
    )
}
export default ProjectWizzy;