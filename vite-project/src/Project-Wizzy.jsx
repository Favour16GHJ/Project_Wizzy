// // Project: Build Wizzy, A Mini-Quiz App
// To solidify this knowledge,  build a Mini-Quiz App.
// Project Requirements:
// Quiz Data: Hardcode an array of 5 questions. Each question object should contain: Done
// id
// questionText
// answerOptions (an array of strings)
// correctAnswer (the index of the correct option)

// State Management (useState): Done
// Track the current question index.
// Track the user's score.
// Track whether the quiz is finished (a boolean).

// Rendering Lists (map & key):
// Use map to display the answerOptions for the current question as a list of buttons.

// Events:
// Add an onClick event handler to each answer button.
// This handler should check if the selected answer is correct, update the score state accordingly, and increment the question index.

// Conditionals:
// Use conditional rendering to show one of two main views:
// Quiz View: (If quizFinished is false, display the current question and answer buttons).
// Results View: (If quizFinished is true, display the final score and a "Restart Quiz" button).
// useEffect (Bonus):
// Use useEffect with the currentQuestionIndex as a dependency to log the question number to the console every time a new question is rendered.

import { useState } from 'react'
let questionData = [];
function ProjectWizzy() {
    questionData = [
        {
            id: 1,
            questionText: "What is the capital of France?",
            answerOptions: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: 2
        },
        {
            id: 2,
            questionText: "Which planet is known as the Red Planet?",
            answerOptions: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1
        }, 
        {
            id: 3,
            questionText: "What is the largest ocean on Earth?",
            answerOptions: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: 3
        },
        {
            id: 4,
            questionText: "Who wrote 'Romeo and Juliet'?",
            answerOptions: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correctAnswer: 1
        },
        {
            id: 5,
            questionText: "What is the chemical symbol for gold?",
            answerOptions: ["Au", "Ag", "Fe", "Pb"],
            correctAnswer: 0
        }
    ]
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let [score, setScore] = useState(0);
    let [quizFinished, setQuizFinished] = useState(false);
    return (
        <>
            <div>
                {!quizFinished ? (
                    <div>
                        <h2>{questionData[currentQuestionIndex].questionText}</h2>
                        {questionData[currentQuestionIndex].answerOptions.map((option, index) => (
                            <button key={index} onClick={() => {
                                if (index === questionData[currentQuestionIndex].correctAnswer) {
                                    setScore(score + 1);
                                }
                                if (currentQuestionIndex + 1 < questionData.length) {
                                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                                } else {
                                    setQuizFinished(true);
                                }
                            }}>{option}</button>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>Your Score: {score} out of {questionData.length}</h2>
                        <button onClick={() => {
                            setCurrentQuestionIndex(0);
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