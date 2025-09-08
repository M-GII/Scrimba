import { useState, useEffect} from 'react'
import he from "he"
import { nanoid } from "nanoid"
import { clsx } from "clsx"

export default function Questions(){
    const [questions,setQuestions] = useState([])



    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => data.results)
            .then(result =>result.map(obj => {
                const correct = { answer: he.decode(obj.correct_answer), isCorrect: true, id: nanoid(), isClicked: false }
                const incorrect = obj.incorrect_answers.map(ans => ({
                    answer: he.decode(ans),
                    isCorrect: false,
                    id: nanoid(),
                    isClicked: false}))
                const options = [...incorrect]
                const randomIndex = Math.floor(Math.random() * (options.length + 1))
                options.splice(randomIndex, 0, correct)

                return {
                    ...obj,
                    question: he.decode(obj.question),
                    options,
                    isSubmitted: false,
                    id: nanoid()}}))
            .then(finalData => setQuestions(finalData))
    }, []) 
    console.log(questions)



    const showQuestions = Array.isArray(questions) && questions.length > 0 ? questions.map((question,index) => {
      return( 
        <section key = {question.id} className="Question">
        <h2> {question.question} </h2>
        <section className='answer-buttons'>
            {question.options.map(answer =>{
                return( 
                <button onClick = {() => makeSelection(question,answer.id)} className ={clsx("answer-btn" , answer.isClicked && "option-selected")} key ={answer.id}>{answer.answer}</button>
                )
            })}
         </section>
    
    
        </section>
    ) 
    })
    : <h2>Please Reload Page </h2>

    function makeSelection(questionAsked,id){
        setQuestions(prev =>
            prev.map(quest =>
                quest.id === questionAsked.id
                    ? {
                        ...quest,
                        options: quest.options.map(o => ({
                        ...o,
                        isClicked: o.id === id}))}
                    : quest))}

    return (
        <section className="Questions">
            {showQuestions}
        </section>
        
    )
}