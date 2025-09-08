import { useState, useEffect} from 'react'
import he from "he"
import { nanoid } from "nanoid"
export default function Questions(){
    const [questions,setQuestions] = useState([])
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => data.results)
            .then(result =>result.map(obj => {
                const correct = { answer: he.decode(obj.correct_answer), isCorrect: true, id: nanoid() }
                const incorrect = obj.incorrect_answers.map(ans => ({
                    answer: he.decode(ans),
                    isCorrect: false,
                    id: nanoid()}))
                const options = [...incorrect]
                const randomIndex = Math.floor(Math.random() * (options.length + 1))
                options.splice(randomIndex, 0, correct)

                return {
                    ...obj,
                    question: he.decode(obj.question),
                    options,
                    id: nanoid()}}))
            .then(finalData => setQuestions(finalData))
    }, []) 
    console.log(questions)
    const showQuestions = Array.isArray(questions) && questions.length > 0 ? questions.map((question,index) => {
      return( 
        <section key = {index} className="Question">
        <h2> {question.question} </h2>
        <section className='answer-buttons'>
            {question.options.map(answer =>{
                return( 
                <button className ="answer-btn" key ={answer.id}>{answer.answer}</button>
                )
            })}
         </section>
    
    
        </section>
    ) 
    })
    : <h2>Please Reload Page </h2>
    return (
        <section className="Questions">
            {showQuestions}
        </section>
        
    )
}